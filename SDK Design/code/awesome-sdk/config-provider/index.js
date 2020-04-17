
// Notice: We load just the one function we want from lodash
const get = require('lodash/object/get')

module.exports = {
  config: {},
  isConfigSet: false,
  get: function (name) {
    if (get(config, name)) {
      return get(config, name)
    }

    throw new Error(`Config not set for ${name}`)
  }
}