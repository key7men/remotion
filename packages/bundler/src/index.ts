import {findClosestFolderWithFile, getConfig} from './bundle';
import {indexHtml} from './index-html';
import {readRecursively} from './read-recursively';
import {cacheExists, clearCache} from './webpack-cache';
import {webpackConfig} from './webpack-config';
import esbuild = require('esbuild');
import webpack = require('webpack');

export const BundlerInternals = {
	esbuild,
	webpackConfig,
	indexHtml,
	cacheExists,
	clearCache,
	getConfig,
	readRecursively,
	findClosestFolderWithFile,
};

export {bundle, BundleOptions, LegacyBundleOptions} from './bundle';
export {WebpackConfiguration, WebpackOverrideFn} from './webpack-config';
export {webpack};
