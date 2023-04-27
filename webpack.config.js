import path from 'path';
import GenerateJsonFromJsPlugin from "./webpack/json-output-plugin.js";
import GenerateYamlFromJsPlugin from "./webpack/yaml-output-plugin.js";
import WebpackShellPluginNext from "webpack-shell-plugin-next";
import * as fs from "fs";
import {glob} from "glob";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  entry: glob.sync(path.join(__dirname, 'components/**/*.component.js')),
  output: {
    path: path.resolve(__dirname, 'components'),
  },
  plugins: [
    new GenerateYamlFromJsPlugin({
      path: 'components/**/*.component.js',
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            fs.unlinkSync(path.join(path.resolve(__dirname, 'components'), "main.js"));
          }
        ]
      }
    })
  ],
};
