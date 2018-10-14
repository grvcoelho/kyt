const { prop } = require('ramda')

const getConfig = config => prop(process.env.NODE_ENV, config)

module.exports = {
  getConfig,
}
