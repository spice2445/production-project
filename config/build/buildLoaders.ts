import webpack from 'webpack';

import { BuildOptions } from './types/config';

import {
  buildBabelLoader,
  buildSvgLoader,
  buildCssLoader,
  buildTypescriptLoader,
  buildFileLoader
} from './loaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader();

  const babelLoader = buildBabelLoader();

  const cssLoader = buildCssLoader(isDev);

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = buildTypescriptLoader();

  const fileLoader = buildFileLoader();

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
