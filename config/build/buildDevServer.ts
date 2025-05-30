import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        port,
        open: true,
        historyApiFallback: true
    }
}