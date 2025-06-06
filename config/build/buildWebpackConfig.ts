import path from "path";
import webpack from "webpack";

import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration
{
  const {isDev, mode, paths} = options;

  console.log(paths);

  return {
    mode,
    entry: paths.entry,
    output: {
      path:  paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}