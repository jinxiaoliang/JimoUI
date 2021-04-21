const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const devConfig = {
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views')
      }
    }
  }
}

const buildConfig = {
  chainWebpack: config => {
    // src和examples目录需要加入编译
    config.module
      .rule('js')
      .include.add(/examples/)
      .end()
      .include.add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
