export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
}

export type Mode = 'development' | 'production';

export interface BuildOptions {
  port?: number;
  paths: BuildPaths;
  mode: Mode;
  analyze?: boolean;
}
