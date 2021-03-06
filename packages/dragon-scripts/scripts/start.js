global.mode = 'start'
// const opn = require("opn");

const { success } = require('../utils/common/print')
const createCompiler = require('../utils/compiler')
const clearConsole = require('../utils/clearConsole')

// const webpack = require("webpack");
const devWebpackConf = require('../config/webpack.dev.conf')

const WebpackDevServer = require('webpack-dev-server')

const getConfig = require('../utils/getConfig')
const config = getConfig('index.js')

const port = config.devServer.port

const compiler = createCompiler(devWebpackConf, port)

const options = config.devServer

const server = new WebpackDevServer(compiler, options)

module.exports = () => {
  server.listen(port, '127.0.0.1', err => {
    if (err) {
      return console.log(err)
    }

    // if (isInteractive) {
    //   clearConsole();
    // }
    console.log(success('Starting the development server...\n'))
  })
}
