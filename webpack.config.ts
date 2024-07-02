import path from 'node:path';

import {buildWebpack} from './config/build/buildWebpack';
import {BuildOptions, BuildPaths} from './config/build/types/types';

export default (env: BuildOptions) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };
  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyze: env.analyze,
  });
};
