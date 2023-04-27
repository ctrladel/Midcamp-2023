const PLUGIN_NAME = "GenerateJsonFromJsPlugin";
import path from "path";
import {glob} from "glob";

const defaultJsonOptions = {
  replacer: null,
  space: 2,
};

class GenerateJsonFromJsPlugin {
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
          const json = JSON.stringify(
            jsonValue,
            this.options.replacer,
            this.options.space
          );

          const dir = path.dirname(file).replace('components/', '');

          let jsonFileName = path.basename(file).replace('.component.js', '.component.json');
          jsonFileName = dir + '/' + jsonFileName;

          compilation.assets[jsonFileName] = {
            source: () => json,
            size: () => json.length,
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

export default GenerateJsonFromJsPlugin;
