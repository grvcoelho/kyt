const {
  ifElse,
  map,
  merge,
  objOf,
  of: wrapInArray,
  pick,
  pipe,
  prop,
} = require('ramda')

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

module.exports = {
  buildErrorPayload,
}
