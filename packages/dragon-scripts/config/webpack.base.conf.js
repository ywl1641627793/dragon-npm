const { __dist } = require('../utils/paths')()
const getPlugins = require('../utils/plugins')
const getAlias = require('../utils/alias')
const config = require('../utils/getConfig')('index.js')

module.exports = {
  entry: './src/index',
  output: {
    path: __dist,
    publicPath: config.publicPath || '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        use: ['babel-loader', 'ts-loader', 'eslint-loader']
      },
      {
        test: /\.jsx/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                hack: `true; @import "~@/styles/variables.less";` // Override with less file
              }
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: 'img/[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css', '.jsx', '.pcss', '.tsx', '.ts'],
    alias: getAlias()
  },
  plugins: getPlugins()
}
