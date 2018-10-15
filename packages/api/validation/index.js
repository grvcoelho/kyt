const Joi = require('joi')
const { curry } = require('ramda')
const { ValidationError } = require('../errors')

const validateEntity = curry((schema, entity) => {
  const options = {
    abortEarly: false,
  }

  return Joi.validate(entity, schema, options)
    .catch((error) => {
      throw new ValidationError({ details: error.details })
    })
})

module.exports = {
  validateEntity,
}
