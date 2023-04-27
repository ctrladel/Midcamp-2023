import {glob} from "glob";

const PLUGIN_NAME = "GenerateYamlFromJsPlugin";
import path from "path";
import YAML from "json-to-pretty-yaml";

const defaultJsonOptions = {
  replacer: null,
  space: 2,
};

class GenerateYamlFromJsPlugin {
  constructor(config = {}) {
    Object.assign(this, {
      ...config,
      filePath: config.path,
      filename: config.filename,
      data: config.data || [],
      options: {
        ...defaultJsonOptions,
        ...config.options,
      },
    });
    this.plugin = PLUGIN_NAME;
  }
  apply(compiler) {
    const emit = async (compilation) => {
      const files = glob.sync(this.filePath);

      for (const file of files) {
        const fullFilePath = path.resolve(compiler.context, file);

        const jsModule = await import(fullFilePath);
        let jsonValue = null;


        if (jsModule.default) {
          jsonValue = jsModule.default;
        }

        if (jsonValue) {
          const yaml = YAML.stringify(jsonValue);

          const dir = path.dirname(file).replace('components/', '');

          let jsonFileName = path.basename(file).replace('.component.js', '.component.yml');
          jsonFileName = dir + '/' + jsonFileName;

          compilation.assets[jsonFileName] = {
            source: () => yaml,
            size: () => yaml.length,
          };
        }
      }
    };

    if (compiler.hooks) {
      compiler.hooks.thisCompilation.tap(this.plugin, emit);
    } else {
      compiler.plugin("emit", emit);
    }
  }
}

export default GenerateYamlFromJsPlugin;
