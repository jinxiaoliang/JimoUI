const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    'jimo-ui': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './../dist')
  }
}

module.exports = merge(commonConfig, prodConfig)
