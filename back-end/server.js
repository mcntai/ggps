require('dotenv').config({
  path: require('path').resolve(__dirname, '.env'),
})

const app = require('./app')

const port = process.env.APP_PORT

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

module.exports = server