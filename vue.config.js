const path = require('path')
const resolve = filePath => path.resolve(__dirname, './', filePath)
module.exports = {
  outputDir: 'docs',
  publicPath: '/v3-component-practice/',
  pages: {
    index: {
      entry: resolve('story/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: 'v3-components'
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch-index').delete('preload-index')
    config.resolve.alias.set('story', resolve('story'))
  }
}
