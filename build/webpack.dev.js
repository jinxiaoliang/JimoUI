const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  target: 'web', // 解决webpack5 热更新没有用的问题
  entry: {
    main: './examples/main.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    hot: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' })
  ]
}
module.exports = merge(commonConfig, devConfig)
