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
  devServer: {
    index: 'page1.html',
    open: process.platform === 'darwin'
  }
}