const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/client/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: `[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {},
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
}
