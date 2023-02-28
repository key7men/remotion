import type {PixelFormat, StillImageFormat} from '@remotion/renderer';
import {BrowserSafeApis} from '@remotion/renderer/client';
import {useCallback, useMemo} from 'react';
import {Checkmark} from '../../icons/Checkmark';
import type {ComboboxValue} from '../NewComposition/ComboBox';
import {Combobox} from '../NewComposition/ComboBox';
import {RemotionInput} from '../NewComposition/RemInput';
import type {SegmentedControlItem} from '../SegmentedControl';
import {SegmentedControl} from '../SegmentedControl';
import {input, label, optionRow, rightRow} from './layout';
import {NumberSetting} from './NumberSetting';
import {QualitySetting} from './QualitySetting';
import type {RenderType} from './RenderModalAdvanced';
import {RenderModalHr} from './RenderModalHr';
import {ScaleSetting} from './ScaleSetting';

const qualityControlModes = ['crf', 'bitrate'] as const;
export type QualityControl = typeof qualityControlModes[number];

export const RenderModalPicture: React.FC<{
	renderMode: RenderType;
	scale: number;
	setScale: React.Dispatch<React.SetStateAction<number>>;
	pixelFormat: PixelFormat;
	setPixelFormat: React.Dispatch<React.SetStateAction<PixelFormat>>;
	imageFormatOptions: SegmentedControlItem[];
	setQualityControl: React.Dispatch<React.SetStateAction<QualityControl>>;
	qualityControlType: QualityControl;
	videoImageFormat: StillImageFormat;
	stillImageFormat: StillImageFormat;
	setQuality: React.Dispatch<React.SetStateAction<number>>;
	quality: number;
	maxCrf: number;
	minCrf: number;
	setCrf: React.Dispatch<React.SetStateAction<number>>;
	shouldDisplayCrfOption: boolean;
	setCustomTargetVideoBitrateValue: React.Dispatch<
		React.SetStateAction<string>
	>;
	crf: number;
	customTargetVideoBitrate: string;
}> = ({
	renderMode,
	scale,
	setScale,
	pixelFormat,
	setPixelFormat,
	imageFormatOptions,
	setQualityControl,
	qualityControlType,
	videoImageFormat,
	setQuality,
	quality,
	maxCrf,
	minCrf,
	setCrf,
	shouldDisplayCrfOption,
	setCustomTargetVideoBitrateValue,
	crf,
	customTargetVideoBitrate,
	stillImageFormat,
}) => {
	const pixelFormatOptions = useMemo((): ComboboxValue[] => {
		return BrowserSafeApis.validPixelFormats.map((option) => {
			return {
				label: option,
				onClick: () => setPixelFormat(option),
				key: option,
				id: option,
				keyHint: null,
				leftItem: pixelFormat === option ? <Checkmark /> : null,
				quickSwitcherLabel: null,
				subMenu: null,
				type: 'item',
				value: option,
			};
		});
	}, [pixelFormat, setPixelFormat]);

	const qualityControlOptions = useMemo((): SegmentedControlItem[] => {
		return qualityControlModes.map((option) => {
			return {
				label: option === 'crf' ? 'CRF' : 'Bitrate',
				onClick: () => setQualityControl(option),
				key: option,
				selected: qualityControlType === option,
			};
		});
	}, [qualityControlType, setQualityControl]);

	const onTargetVideoBitrateChanged: React.ChangeEventHandler<HTMLInputElement> =
		useCallback(
			(e) => {
				setCustomTargetVideoBitrateValue(e.target.value);
			},
			[setCustomTargetVideoBitrateValue]
		);

	return (
		<div>
			{renderMode === 'video' ? (
				<div style={optionRow}>
					<div style={label}>Image Format</div>
					<div style={rightRow}>
						<SegmentedControl
							items={imageFormatOptions}
							needsWrapping={false}
						/>
					</div>
				</div>
			) : null}
			{renderMode === 'video' && videoImageFormat === 'jpeg' && (
				<QualitySetting setQuality={setQuality} quality={quality} />
			)}
			{renderMode === 'still' && stillImageFormat === 'jpeg' && (
				<QualitySetting setQuality={setQuality} quality={quality} />
			)}
			<RenderModalHr />
			{renderMode === 'video' ? (
				<div style={optionRow}>
					<div style={label}>Quality control</div>
					<div style={rightRow}>
						<SegmentedControl items={qualityControlOptions} needsWrapping />
					</div>
				</div>
			) : null}
			{shouldDisplayCrfOption &&
			qualityControlType === 'crf' &&
			renderMode !== 'still' ? (
				<NumberSetting
					min={minCrf}
					max={maxCrf}
					name="CRF"
					onValueChanged={setCrf}
					value={crf}
					step={1}
				/>
			) : null}
			{qualityControlType === 'bitrate' && renderMode !== 'still' ? (
				<div style={optionRow}>
					<div style={label}>Target video bitrate</div>
					<div style={rightRow}>
						<div>
							<RemotionInput
								style={input}
								value={customTargetVideoBitrate}
								onChange={onTargetVideoBitrateChanged}
							/>
						</div>
					</div>
				</div>
			) : null}
			<RenderModalHr />
			{renderMode === 'video' ? (
				<ScaleSetting scale={scale} setScale={setScale} />
			) : null}
			<RenderModalHr />
			{renderMode === 'video' ? (
				<div style={optionRow}>
					<div style={label}>Pixel format</div>
					<div style={rightRow}>
						<Combobox
							values={pixelFormatOptions}
							selectedId={pixelFormat}
							title="Pixel Format"
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};