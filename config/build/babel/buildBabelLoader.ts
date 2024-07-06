import {BuildOptions} from '../types/types';
import {removeDatatestidPlugin} from './removeDatatestidPlugin';

export const buildBabelLoader = (options: BuildOptions) => {
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';
  const plugins = [];

  if (isProd) {
    plugins.push([removeDatatestidPlugin, {props: ['data-testid']}]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {targets: {node: 'current'}}],
          '@babel/preset-typescript',
          ['@babel/preset-react', {runtime: 'automatic'}],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
};
