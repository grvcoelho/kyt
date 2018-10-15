const routes = require('express').Router()
const organizationController = require('../resources/organization')

routes.post('/organizations', organizationController.create)

module.exports = routes
