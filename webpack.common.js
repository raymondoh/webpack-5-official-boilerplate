const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    //app: "./src/index.js",
    main: path.resolve(__dirname, "./src/app.js"),
    //print: path.resolve(__dirname, "./src/print.js"),
  },
  output: {
    filename: "scripts/[name].[contenthash].js",
    //filename: "scripts/[name].bundle.js", // option
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
    //assetModuleFilenme: "images/[name].[ext]", // option
    //assetModuleFilename: "images/[hash][ext][query]",// option

    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack boilerplate",
      template: path.resolve(__dirname, "./src/template.html"),
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
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        //type: "asset",
        type: "asset/resource",
      },
    ],
  },
};
