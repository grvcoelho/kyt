const cuid = require('cuid')

const generateId = prefix => `${prefix}_${cuid()}`

const connect = db => db.sync()

module.exports = {
  connect,
  generateId,
}
