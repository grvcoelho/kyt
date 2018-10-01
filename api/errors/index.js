class AuthenticationError extends Error {
  constructor (error = {}) {
    super(error.message)

    this.name = 'AuthenticationError'
    this.type = 'authentication'
    this.statusCode = 401
  }
}

class InternalServerError extends Error {
  constructor (error = {}) {
    super(error.message)

    this.name = 'InternalServerError'
    this.type = 'internal'
    this.statusCode = 500
  }
}

class InvalidParameterError extends Error {
  constructor (error = {}) {
    super(error.message)

    this.name = 'InvalidParameterError'
    this.type = 'invalid_parameter'
    this.field = error.field

    if (error.path) {
      this.field = error.path.reduce((acc, curr) => `${acc}.${curr}`, '')
    }
  }
}

class NotFoundError extends Error {
  constructor (error = {}) {
    super(error.message)

    this.name = 'NotFoundError'
    this.type = 'not_found'
    this.statusCode = 404
  }
}

class ValidationError extends Error {
  constructor (error = {}) {
    super(error.message)

    this.name = 'ValidationError'
    this.type = 'validation'
    this.statusCode = 400

    if (error.details) {
      this.details = error.details.map(err => new InvalidParameterError(err))
    }
  }
}

module.exports = {
  AuthenticationError,
  InternalServerError,
  InvalidParameterError,
  NotFoundError,
  ValidationError,
}
