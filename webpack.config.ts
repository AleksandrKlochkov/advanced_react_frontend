import webpack from 'webpack'; 
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  console.log(env.mode);
  
  const mode = env.mode || 'development';
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    isDev,
    paths,
    port: PORT
  });
  
  return config;
};
