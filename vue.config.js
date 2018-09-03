const path = require('path')
const glob = require('glob')

const PAGES_PATH = path.resolve(__dirname, './src/pages')
const pages = {}

//配置 pages 目录下的多页面，通过循环获取每一个 page 文件夹下的 html 和 js
glob.sync(PAGES_PATH + '/*/main.js').forEach(filepath => {
  const pageName = path.basename(path.dirname(filepath))

  pages[pageName] = {
    entry: filepath,
    template: path.dirname(filepath) + '/index.html',
    filename: `${pageName}.html`,
    chunks: ['chunk-vendors', 'chunk-common', pageName]
  }
})
console.log(pages)

module.exports = {
  pages: pages,
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  chainWebpack: config => {

    config.module
      .rule('eslint')
        .exclude
          .add(/mock/)
          .end()

    config.module
      .rule('css')
        .test(/\.css$/)
        .oneOf('vue')
        .resourceQuery(/\?vue/)
        .use('px2rem')
          .loader('px2rem-loader')
          .options({
            remUnit: 75
          })

    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  devServer: {
    index: 'page1.html',
    open: process.platform === 'darwin'
  }
}