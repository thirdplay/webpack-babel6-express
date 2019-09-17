const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8090

if (app.get('env') === 'development') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../webpack.dev.js')

  config.entry.app.unshift('webpack-hot-middleware/client?reload=true&timeout=1000')
  config.plugins.push(new webpack.HotModuleReplacementPlugin())

  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/api/add', function(req, res) {
  const firstValue = Number(req.body.firstValue)
  const secondValue = Number(req.body.secondValue)
  const sum = firstValue + secondValue
  res.json({sum: sum, firstValue: firstValue, secondValue: secondValue})
})

app.listen(port, () => {
  console.log('Server started on port:' + port)
})
