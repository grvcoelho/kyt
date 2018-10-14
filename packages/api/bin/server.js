const { app, server } = require('../server')
const database = require('../database')
const { connect } = require('../database/lib')

const port = Number(process.env.PORT) || 3000

const startServer = () => server.listen(port, (err) => {
  if (err) throw err
  console.log(`App is up and running on port: ${port}`)
})

const connectToDatabase = () => connect(database)

app.prepare()
  .then(connectToDatabase)
  .then(startServer)
