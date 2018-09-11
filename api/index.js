const express = require('express')
const next = require('next')

const app = next({
  dev: process.NODE_ENV !== 'production',
  quiet: true,
})

const nextHandler = app.getRequestHandler()

const server = express()

server.disable('x-powered-by')
server.get('/_health_check', (req, res) => res.sendStatus(200))
server.get('*', nextHandler)

module.exports = {
  app,
  server,
}
