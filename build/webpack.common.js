const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  resolve: {
    extensions: ['.vue', '.js']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'style/images/[name][ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '8192',
              outputPath: 'fonts'
            }
          }
        ]
        // type: 'asset/resource',
        // generator: {
        //   filename: 'fonts/[name][ext]'
        // }
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({})
  ]
}
