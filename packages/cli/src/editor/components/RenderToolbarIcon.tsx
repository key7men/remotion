import type {LogLevel} from '@remotion/renderer';
import type {SVGProps} from 'react';
import React, {useCallback, useContext, useMemo} from 'react';
import {Internals, useCurrentFrame} from 'remotion';
import {getDefaultOutLocation} from '../../get-default-out-name';
import {PreviewServerConnectionCtx} from '../helpers/client-id';
import {RenderIcon} from '../icons/render';
import {ModalsContext} from '../state/modals';
import {ControlButton} from './ControlButton';

export const RenderStillButton: React.FC = () => {
	const {setSelectedModal} = useContext(ModalsContext);
	const {type} = useContext(PreviewServerConnectionCtx);

	const iconStyle: SVGProps<SVGSVGElement> = useMemo(() => {
		return {
			style: {
				height: 15,
			},
		};
	}, []);
	const tooltip =
		type === 'connected'
			? 'Export the current frame as a still image'
			: 'Connect to the preview server to render';

	const video = Internals.useVideo();
	const frame = useCurrentFrame();
	const onClick = useCallback(() => {
		if (!video) {
			return null;
		}

		setSelectedModal({
			type: 'render',
			compositionId: video.id,
			initialFrame: frame,
			// TODO: JPEG for video, PNG for image
			initialImageFormat: 'png',
			initialOutName: getDefaultOutLocation({
				compositionName: video.id,
				defaultExtension: 'png',
			}),
			// TODO: Determine defaults from config file
			initialQuality: window.remotion_renderDefaults?.quality ?? 80,
			initialScale: window.remotion_renderDefaults?.scale ?? 1,
			initialVerbose:
				(window.remotion_renderDefaults?.logLevel as LogLevel) === 'verbose',
			initialRenderType: video.durationInFrames > 1 ? 'video' : 'still',
		});
	}, [video, frame, setSelectedModal]);

	if (!video) {
		return null;
	}

	return (
		<ControlButton
			disabled={type !== 'connected'}
			title={tooltip}
			aria-label={tooltip}
			onClick={onClick}
		>
			<RenderIcon svgProps={iconStyle} />
		</ControlButton>
	);
};