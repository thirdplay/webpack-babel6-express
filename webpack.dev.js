const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    open: true,
    host: 'localhost',
    port: 8091,
    proxy: {
      '/': {target: 'http://localhost:8090/'},
    },
  },
})
