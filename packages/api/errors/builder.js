const {
  T,
  assoc,
  cond,
  ifElse,
  is,
  map,
  merge,
  objOf,
  of: wrapInArray,
  pick,
  pipe,
  prop,
} = require('ramda')

const {
  AuthenticationError,
  InternalServerError,
  InvalidParameterError,
  NotFoundError,
  ValidationError,
} = require('../errors')

const hasErrorDetails = pipe(
  prop('details'),
  Array.isArray
)

const normalizeErrors = ifElse(
  hasErrorDetails,
  prop('details'),
  wrapInArray
)

const buildErrorObject = pipe(
  pick([
    'type',
    'message',
    'field',
  ]),
  merge({
    type: 'internal',
    message: 'An error occurred',
    field: null,
  })
)

const buildErrorPayload = pipe(
  normalizeErrors,
  map(buildErrorObject),
  objOf('errors')
)

const buildErrorAndAddStatusCode = statusCode => pipe(
  buildErrorPayload,
  objOf('body'),
  assoc('statusCode', statusCode)
)

const defaultErrorHandler = (error) => {
  const newError = new InternalServerError(error)

  return buildErrorAndAddStatusCode(500)(newError)
}

const buildErrorResponse = cond([
  [is(AuthenticationError), buildErrorAndAddStatusCode(401)],
  [is(InvalidParameterError), buildErrorAndAddStatusCode(400)],
  [is(NotFoundError), buildErrorAndAddStatusCode(404)],
  [is(ValidationError), buildErrorAndAddStatusCode(400)],
  [T, defaultErrorHandler],
])

module.exports = {
  buildErrorPayload,
  buildErrorResponse,
}
