const Joi = require('joi')
const { validateEntity } = require('./index')
const {
  ValidationError,
} = require('../errors')

describe('validateEntity', () => {
  test('with a valid entity', async () => {
    const schema = Joi.string().required()
    const entity = 'Sweden'

    expect.assertions(1)

    await expect(validateEntity(schema, entity))
      .resolves
      .toEqual('Sweden')
  })

  test('with an invalid entity', async () => {
    const schema = Joi.string().required()
    const entity = 123

    expect.assertions(1)

    await expect(validateEntity(schema, entity))
      .rejects
      .toBeInstanceOf(ValidationError)
  })
})
