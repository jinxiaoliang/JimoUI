const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    'jimo-ui': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'jimo.js',
    library: 'jimo',
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({})
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)
