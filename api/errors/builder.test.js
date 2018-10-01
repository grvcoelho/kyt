const { buildErrorPayload } = require('./builder')
const {
  InvalidParameterError,
  ValidationError,
} = require('./index')

describe('buildErrorPayload', () => {
  test('with an error without details', () => {
    const error = new ValidationError({ message: 'Something happened :/' })
    const output = buildErrorPayload(error)

    expect(output).toEqual({
      errors: [{
        type: 'validation',
        field: null,
        message: 'Something happened :/',
      }],
    })
  })

  test('with an error with details', () => {
    const error = new ValidationError({
      message: 'Something happened :/',
      details: [
        new InvalidParameterError({ message: '"id" is required', field: 'id' }),
        new InvalidParameterError({ message: '"name" is required', field: 'name' }),
      ],
    })

    const output = buildErrorPayload(error)

    expect(output).toEqual({
      errors: [{
        type: 'invalid_parameter',
        field: 'id',
        message: '"id" is required',
      }, {
        type: 'invalid_parameter',
        field: 'name',
        message: '"name" is required',
      }],
    })
  })
})
