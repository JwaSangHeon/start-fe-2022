const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const distPath = path.join(__dirname, "docs");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  devServer: {
    static: {
      directory: distPath,
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: distPath,
  },
};
