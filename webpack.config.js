const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = (env, argv) => {
  return {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    devServer: {
      contentBase: './build',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hide API Key Demo",
        template: path.resolve(__dirname, './src/index.html'),
      })
    ]
  }
};