const { app, server } = require('../api')

const port = Number(process.env.PORT) || 3000

const startServer = () => server.listen(port, (err) => {
  if (err) throw err
  console.log(`App is up and running on port: ${port}`)
})

app.prepare()
  .then(startServer)
