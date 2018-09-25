const Sequelize = require('sequelize')
const {
  merge,
  values,
} = require('ramda')

const rawModels = require('./models')
const config = require('../config/database')

const defaults = {
  define: {
    underscored: true,
  },
}

const initDatabase = () => {
  const database = new Sequelize(merge(
    defaults,
    config
  ))

  const createInstance = model => ({
    model,
    instance: model.create(database),
  })

  const associateModels = ({ instance, model }) => {
    if (model.associate) {
      model.associate(instance, database.models)
    }
  }

  values(rawModels)
    .map(createInstance)
    .map(associateModels)

  return database
}

module.exports = initDatabase()
