const path = require('path')
// const fs = require('fs')
// const join = path.join
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
// function getEntries (path) {
//   const files = fs.readdirSync(resolve(path))
//   const entries = files.reduce((ret, item) => {
//     const itemPath = join(path, item)
//     const isDir = fs.statSync(itemPath).isDirectory()
//     if (isDir) {
//       ret[item] = resolve(join(itemPath, 'index.js'))
//     } else {
//       const [name] = item.split('.')
//       ret[name] = resolve(`${itemPath}`)
//     }
//     return ret
//   }, {})
//   return entries
// }
// const devConfig = {
//   // ...
//   pages: {
//     index: {
//       entry: 'examples/main.js',
//       template: 'public/index.html',
//       filename: 'index.html'
//     }
//   },
//   configureWebpack: {
//     resolve: {
//       extensions: ['.js', '.vue', '.json'],
//       alias: {
//         '@': resolve('src'),
//         assets: resolve('examples/assets'),
//         views: resolve('examples/views')
//       }
//     }
//   },
//   devServer: {
//     port: 8091, // 固定端口
//     hot: true, // 开启热更新
//     open: 'Google Chrome'// 固定打开浏览器
//   },
//   chainWebpack: config => {
//     config.module
//       .rule('js')
//       .include
//       .add('/src')
//       .end()
//   }

// }
// const buildConfig = {
//   // ...
//   chainWebpack: config => {
//     config.module
//       .rule('js')
//       .include
//       .add('/src')
//       .end()
//     config.optimization.delete('splitChunks')
//     config.plugins.delete('copy')
//     config.plugins.delete('html')
//     config.plugins.delete('preload')
//     config.plugins.delete('prefetch')
//     config.plugins.delete('hmr')
//     config.entryPoints.delete('app')
//     config.module
//       .rule('fonts')
//       .use('url-loader')
//       .tap(option => {
//         option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
//         return option
//       })
//   },
//   outputDir: 'lib',
//   productionSourceMap: false,
//   configureWebpack: {
//     entry: {
//       ...getEntries('src')
//     },
//     output: {
//       filename: '[name]/index.js',
//       libraryTarget: 'commonjs2'
//     }
//   },
//   css: {
//     sourceMap: true,
//     extract: {
//       filename: 'style/[name].css'// 在lib文件夹中建立style文件夹中，生成对应的css文件。
//     }
//   }

// }
// module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
module.exports = {
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
  },
  chainWebpack: config => {
    // packages和examples目录需要加入编译
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
