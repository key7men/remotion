import fs from 'fs';
import type {SmallTCompMetadata, TAsset} from 'remotion';
import {Internals} from 'remotion';
import type {RenderMediaOnDownload} from './assets/download-and-map-assets-to-file';
import type {DownloadMap} from './assets/download-map';
import {makeDownloadMap} from './assets/download-map';
import type {BrowserExecutable} from './browser-executable';
import type {BrowserLog} from './browser-log';
import type {Browser} from './browser/Browser';
import type {Page} from './browser/BrowserPage';
import {cycleBrowserTabs} from './cycle-browser-tabs';
import type {FfmpegExecutable} from './ffmpeg-executable';
import {findRemotionRoot} from './find-closest-package-json';
import type {FrameRange} from './frame-range';
import {getActualConcurrency} from './get-concurrency';
import {getFramesToRender} from './get-duration-from-frame-range';
import type {CountType} from './get-frame-padded-index';
import {getFilePadLength} from './get-frame-padded-index';
import {getRealFrameRange} from './get-frame-to-render';
import type {ImageFormat} from './image-format';
import {DEFAULT_IMAGE_FORMAT} from './image-format';
import type {ServeUrl, ServeUrlOrWebpackBundle} from './legacy-webpack-config';
import {
	getBrowserServeUrl,
	getServeUrlWithFallback,
} from './legacy-webpack-config';
import type {CancelSignal} from './make-cancel-signal';
import {cancelErrorMessages} from './make-cancel-signal';
import type {ChromiumOptions} from './open-browser';
import {Pool} from './pool';
import {prepareServer} from './prepare-server';
import {validateQuality} from './quality';
import {
	makeBrowser,
	makePage,
	renderWebFrameAndRetryTargetClose,
} from './render-web-frame';
import type {BrowserReplacer} from './replace-browser';
import {handleBrowserCrash} from './replace-browser';
import type {OnStartData, RenderFramesOutput} from './types';
import {validateScale} from './validate-scale';

type ConfigOrComposition =
	| {
			/**
			 * @deprecated This field has been renamed to `composition`
			 */
			config: SmallTCompMetadata;
	  }
	| {
			composition: SmallTCompMetadata;
	  };

type ConcurrencyOrParallelism =
	| {
			concurrency?: number | null;
	  }
	| {
			/**
			 * @deprecated This field has been renamed to `concurrency`
			 */
			parallelism?: number | null;
	  };

const MAX_RETRIES_PER_FRAME = 1;

type RenderFramesOptions = {
	onStart: (data: OnStartData) => void;
	onFrameUpdate: (
		framesRendered: number,
		frameIndex: number,
		timeToRenderInMilliseconds: number
	) => void;
	outputDir: string | null;
	inputProps: unknown;
	envVariables?: Record<string, string>;
	imageFormat: ImageFormat;
	quality?: number;
	frameRange?: FrameRange | null;
	everyNthFrame?: number;
	dumpBrowserLogs?: boolean;
	puppeteerInstance?: Browser;
	browserExecutable?: BrowserExecutable;
	onBrowserLog?: (log: BrowserLog) => void;
	onFrameBuffer?: (buffer: Buffer, frame: number) => void;
	onDownload?: RenderMediaOnDownload;
	timeoutInMilliseconds?: number;
	chromiumOptions?: ChromiumOptions;
	scale?: number;
	ffmpegExecutable?: FfmpegExecutable;
	ffprobeExecutable?: FfmpegExecutable;
	port?: number | null;
	cancelSignal?: CancelSignal;
	/**
	 * @deprecated Only for Remotion internal usage
	 */
	downloadMap?: DownloadMap;
	muted?: boolean;
} & ConfigOrComposition &
	ConcurrencyOrParallelism &
	ServeUrlOrWebpackBundle;

const getComposition = (others: ConfigOrComposition) => {
	if ('composition' in others) {
		return others.composition;
	}

	if ('config' in others) {
		return others.config;
	}

	return undefined;
};

const getConcurrency = (others: ConcurrencyOrParallelism) => {
	if ('concurrency' in others) {
		return others.concurrency;
	}

	if ('parallelism' in others) {
		return others.parallelism;
	}

	return undefined;
};

const innerRenderFrames = ({
	onFrameUpdate,
	outputDir,
	onStart,
	inputProps,
	quality,
	imageFormat = DEFAULT_IMAGE_FORMAT,
	frameRange,
	onError,
	envVariables,
	onBrowserLog,
	onFrameBuffer,
	onDownload,
	pagesArray,
	serveUrl,
	composition,
	timeoutInMilliseconds,
	scale = 1,
	actualConcurrency,
	everyNthFrame = 1,
	proxyPort,
	cancelSignal,
	downloadMap,
	muted,
	browserReplacer,
	browserExecutable,
	chromiumOptions,
	dumpBrowserLogs,
}: Omit<RenderFramesOptions, 'url' | 'onDownload' | 'puppeteerInstance'> & {
	onError: (err: Error) => void;
	pagesArray: Page[];
	serveUrl: ServeUrl;
	composition: SmallTCompMetadata;
	actualConcurrency: number;
	onDownload: RenderMediaOnDownload;
	proxyPort: number;
	downloadMap: DownloadMap;
	browserReplacer: BrowserReplacer;
	puppeteerInstance: Browser | null;
}): Promise<RenderFramesOutput> => {
	if (outputDir) {
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, {
				recursive: true,
			});
		}
	}

	const downloadPromises: Promise<unknown>[] = [];

	const realFrameRange = getRealFrameRange(
		composition.durationInFrames,
		frameRange ?? null
	);

	const framesToRender = getFramesToRender(realFrameRange, everyNthFrame);
	const lastFrame = framesToRender[framesToRender.length - 1];

	const getPool = async () => {
		const pages = new Array(actualConcurrency).fill(true).map(() =>
			makePage({
				pagesArray,
				browserReplacer,
				composition,
				imageFormat,
				inputProps,
				muted: muted ?? false,
				proxyPort,
				realFrameRange,
				scale,
				serveUrl,
				timeoutInMilliseconds,
				envVariables,
				onBrowserLog,
			})
		);
		const puppeteerPages = await Promise.all(pages);
		const pool = new Pool(puppeteerPages);
		return pool;
	};

	// If rendering a GIF and skipping frames, we must ensure it starts from 0
	// and then is consecutive so FFMPEG recognizes the sequence
	const countType: CountType =
		everyNthFrame === 1 ? 'actual-frames' : 'from-zero';

	const filePadLength = getFilePadLength({
		lastFrame,
		totalFrames: framesToRender.length,
		countType,
	});
	const framesRendered = {frames: 0};

	const poolPromise = getPool();

	onStart({
		frameCount: framesToRender.length,
	});

	const assets: TAsset[][] = new Array(framesToRender.length).fill(undefined);
	const stopState = {isStopped: false};
	cancelSignal?.(() => {
		stopState.isStopped = true;
	});

	const progress = Promise.all(
		framesToRender.map(async (frame, index) => {
			const layers = Promise.all(
				composition.layers.map((l) => {
					if (l.type === 'svg') {
						console.log('DO SVG here 😄');
						return null;
					}

					if (l.type === 'web') {
						return renderWebFrameAndRetryTargetClose({
							frame,
							index,
							retriesLeft: MAX_RETRIES_PER_FRAME,
							attempt: 1,
							poolPromise,
							countType,
							actualConcurrency,
							assets,
							browserReplacer,
							composition,
							downloadMap,
							imageFormat,
							onFrameBuffer,
							onFrameUpdate,
							outputDir,
							quality,
							scale,
							stopState,
							framesRendered,
							framesToRender,
							inputProps,
							lastFrame,
							muted: muted ?? false,
							onDownload,
							onError,
							pagesArray,
							proxyPort,
							realFrameRange,
							serveUrl,
							timeoutInMilliseconds: timeoutInMilliseconds ?? 30000,
							browserExecutable,
							chromiumOptions,
							dumpBrowserLogs,
							envVariables,
							onBrowserLog,
						});
					}

					throw new Error('unknown layer type');
				})
			);

			return layers;
		})
	);

	console.log(progress);

	const happyPath = progress.then(() => {
		const firstFrameIndex = countType === 'from-zero' ? 0 : framesToRender[0];
		const returnValue: RenderFramesOutput = {
			assetsInfo: {
				assets,
				imageSequenceName: `element-%0${filePadLength}d.${imageFormat}`,
				firstFrameIndex,
				downloadMap,
			},
			frameCount: framesToRender.length,
		};
		return returnValue;
	});

	return happyPath
		.then(() => {
			return Promise.all(downloadPromises);
		})
		.then(() => happyPath);
};

type CleanupFn = () => void;

export const renderFrames = (
	options: RenderFramesOptions
): Promise<RenderFramesOutput> => {
	const composition = getComposition(options);
	const concurrency = getConcurrency(options);

	if (!composition) {
		throw new Error(
			'No `composition` option has been specified for renderFrames()'
		);
	}

	Internals.validateDimension(
		composition.height,
		'height',
		'in the `config` object passed to `renderFrames()`'
	);
	Internals.validateDimension(
		composition.width,
		'width',
		'in the `config` object passed to `renderFrames()`'
	);
	Internals.validateFps(
		composition.fps,
		'in the `config` object of `renderFrames()`',
		false
	);
	Internals.validateDurationInFrames(
		composition.durationInFrames,
		'in the `config` object passed to `renderFrames()`'
	);
	if (options.quality !== undefined && options.imageFormat !== 'jpeg') {
		throw new Error(
			"You can only pass the `quality` option if `imageFormat` is 'jpeg'."
		);
	}

	const selectedServeUrl = getServeUrlWithFallback(options);

	validateQuality(options.quality);
	validateScale(options.scale);

	const browserInstance =
		options.puppeteerInstance ??
		makeBrowser({
			browserExecutable: options.browserExecutable,
			chromiumOptions: options.chromiumOptions,
			dumpBrowserLogs: options.dumpBrowserLogs,
			scale: options.scale,
		});

	const downloadMap = options.downloadMap ?? makeDownloadMap();

	const onDownload = options.onDownload ?? (() => () => undefined);

	const actualConcurrency = getActualConcurrency(concurrency ?? null);

	const openedPages: Page[] = [];

	return new Promise<RenderFramesOutput>((resolve, reject) => {
		const cleanup: CleanupFn[] = [];
		const onError = (err: Error) => {
			reject(err);
		};

		const browserServeUrl = getBrowserServeUrl(selectedServeUrl);

		Promise.race([
			new Promise<RenderFramesOutput>((_, rej) => {
				options.cancelSignal?.(() => {
					rej(new Error(cancelErrorMessages.renderFrames));
				});
			}),
			Promise.all([
				prepareServer({
					browserWebpackConfigOrServeUrl: browserServeUrl,
					onDownload,
					onError,
					ffmpegExecutable: options.ffmpegExecutable ?? null,
					ffprobeExecutable: options.ffprobeExecutable ?? null,
					port: options.port ?? null,
					downloadMap,
					remotionRoot: findRemotionRoot(),
				}),
				browserInstance,
			]).then(([maybeBrowser, puppeteerInstance]) => {
				const {closeServer, offthreadPort, serveUrl} = maybeBrowser;
				const browserReplacer = handleBrowserCrash(puppeteerInstance);
				if (browserReplacer) {
					const {stopCycling} = cycleBrowserTabs(
						browserReplacer,
						actualConcurrency
					);
					cleanup.push(stopCycling);
				}

				cleanup.push(closeServer);

				return innerRenderFrames({
					...options,
					puppeteerInstance,
					onError,
					pagesArray: openedPages,
					serveUrl: serveUrl as string,
					composition,
					actualConcurrency,
					onDownload,
					proxyPort: offthreadPort,
					downloadMap,
					browserReplacer,
				});
			}),
		])
			.then((res) => {
				return resolve(res);
			})
			.catch((err) => reject(err))
			.finally(() => {
				// If browser instance was passed in, we close all the pages
				// we opened.
				// If new browser was opened, then closing the browser as a cleanup.

				if (options.puppeteerInstance) {
					Promise.all(openedPages.map((p) => p.close())).catch((err) => {
						console.log('Unable to close browser tab', err);
					});
				} else {
					Promise.resolve(browserInstance)
						.then((puppeteerInstance) => {
							return puppeteerInstance.close(true);
						})
						.catch((err) => {
							console.log('Unable to close browser', err);
						});
				}

				cleanup.forEach((c) => {
					c();
				});
				// Don't clear download dir because it might be used by stitchFramesToVideo
			});
	});
};
