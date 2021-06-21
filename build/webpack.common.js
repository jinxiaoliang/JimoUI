const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
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
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     // placeholder
        //     name: '[name].[ext]',
        //     outputPath: 'font'
        //   }
        // }
        type: 'asset/resource',
        generator: {
          filename: 'font/[name][ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        type: 'asset/resource',
        generator: {
          filename: 'style/css/[name][ext]'
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new CleanWebpackPlugin()
  ]
}
