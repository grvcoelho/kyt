const { STRING } = require('sequelize')
const { generateId } = require('../../database/lib')

const create = database => database.define('Organizations', {
  id: {
    type: STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: () => generateId('org'),
  },
  name: {
    type: STRING,
    allowNull: false,
  },
})

module.exports = {
  create,
}
