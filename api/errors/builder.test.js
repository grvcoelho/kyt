const {
  buildErrorPayload,
  buildErrorResponse,
} = require('./builder')

const {
  InvalidParameterError,
  ValidationError,
} = require('./index')

describe('builder', () => {
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

  describe('buildErrorResponse', () => {
    test('with a known error', () => {
      const error = new ValidationError({ message: 'Something happened :/' })
      const output = buildErrorResponse(error)

      expect(output).toEqual({
        statusCode: 400,
        body: {
          errors: [{
            type: 'validation',
            field: null,
            message: 'Something happened :/',
          }],
        },
      })
    })

    test('with an unknown error', () => {
      const error = new Error('Something unexpected')
      const output = buildErrorResponse(error)

      expect(output).toEqual({
        statusCode: 500,
        body: {
          errors: [{
            type: 'internal',
            field: null,
            message: 'An internal error occurred',
          }],
        },
      })
    })
  })
})
