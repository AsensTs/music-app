// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  //插件选项
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "stylus",
      // eslint-disable-next-line prettier/prettier
      patterns: [
        resolve("./src/assets/style/index.styl")
      ]
    }
  },
  // 路径别名 alias
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@style", resolve("src/assets/style"))
      .set("@images", resolve("src/assets/images"))
      .set("@js", resolve("src/assets/js"));
  }
};
