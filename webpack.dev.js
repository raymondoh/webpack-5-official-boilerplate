const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    //directory: path.join(__dirname, "public"),
    client: {
      overlay: true,
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      // { // use for narmal css
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(sa|sc|c)ss$/i, // use for sass
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
