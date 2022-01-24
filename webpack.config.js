const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //mode: "development",
  //mode: 'production',
  //devtool: "inline-source-map",
  // devServer: {
  //   static: "./dist",
  //   hot: true,
  // },
  //entry: {
  //index: "./src/index.js",
  // print: "./src/print.js",
  //another: "./src/another-module.js",
  //},
  // output: {
  //   filename: "[name].[contenthash].js",
  //   path: path.resolve(__dirname, "dist"),
  //   clean: true,
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
