const { __configs } = require('./paths')
const { pathExistsSync } = require('fs-extra')
const { resolve } = require('path')

module.exports = function(name) {
  if (!pathExistsSync(resolve(__configs, name))) {
    let innerPath = resolve(__dirname, `../config/${name}`)
    return pathExistsSync(innerPath) ? require(innerPath) : {}
  }
  return require(resolve(__configs, name))
}
