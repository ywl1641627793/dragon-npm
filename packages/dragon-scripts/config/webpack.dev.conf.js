const baseWebpackConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: false
});
