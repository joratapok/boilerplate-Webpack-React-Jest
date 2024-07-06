import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import webpack from 'webpack';

import {buildBabelLoader} from './babel/buildBabelLoader';
import {BuildOptions} from './types/types';

export function buildLoaders(options: BuildOptions): webpack.ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      modules: {
        mode: 'local',
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['tailwindcss', 'postcss-preset-env', 'autoprefixer'],
      },
    },
  };

  const scssLoader = {
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      // 'sass-loader',
      postcssLoader,
    ],
  };

  const cssModuleLoader = {
    test: /\.module\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'postcss-loader',
    ],
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {icon: true},
      },
    ],
  };

  return [scssLoader, cssModuleLoader, babelLoader, imageLoader, svgLoader];
}
