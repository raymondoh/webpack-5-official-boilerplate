const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      inject: true,
      hash: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  output: {
    filename: "scripts/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
