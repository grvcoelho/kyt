const express = require('express')
const next = require('next')
const { json } = require('body-parser')
const routes = require('./routes')

const app = next({
  dev: process.NODE_ENV !== 'production',
  quiet: true,
})

const nextHandler = app.getRequestHandler()

const server = express()

server.disable('x-powered-by')
server.use(json())
server.use('/api', routes)
server.get('/_health_check', (req, res) => res.sendStatus(200))
server.get('*', nextHandler)

module.exports = {
  app,
  server,
}
