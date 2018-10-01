const Joi = require('joi')

const create = Joi.object().keys({
  name: Joi.string().required(),
})

module.exports = {
  create,
}
