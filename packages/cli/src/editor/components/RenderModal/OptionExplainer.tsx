import type {RemotionOption} from '@remotion/renderer';
import {Spacing} from '../layout';
import {MenuDivider} from '../Menu/MenuDivider';
import {CliCopyButton} from './CliCopyButton';

const container: React.CSSProperties = {
	fontSize: 14,
};

const title: React.CSSProperties = {
	fontSize: 14,
};

const description: React.CSSProperties = {
	fontSize: 14,
	maxWidth: 200,
};

const link: React.CSSProperties = {
	fontSize: 14,
	maxWidth: 200,
	color: '#0b84f3',
	wordWrap: 'break-word',
};

export const OptionExplainer: React.FC<{
	option: RemotionOption;
}> = ({option}) => {
	return (
		<div style={container} className="__remotion-info-button-container">
			<div>
				<strong style={title}>{option.name}</strong>
			</div>
			<div style={description}>{option.description}</div>
			<Spacing block y={0.5} />
			<MenuDivider />
			<div style={{...description, display: 'flex', alignItems: 'center'}}>
				CLI flag:<code> {option.cliFlag}</code>
				<div style={{display: 'flex', justifyContent: 'flex-end', flex: 1}}>
					<CliCopyButton valueToCopy={option.cliFlag} />
				</div>
			</div>
			<div style={description}>
				Node.JS option: <code>{option.ssrName}</code>
			</div>
			<div style={description}>
				<a style={link} href={option.docLink} target="_blank">
					Docs
				</a>
			</div>
		</div>
	);
};