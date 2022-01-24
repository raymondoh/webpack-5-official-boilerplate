const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === "production";

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  //plugins: [new MiniCssExtractPlugin({ filename: "styles/[name].css" })],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
  ],
});
