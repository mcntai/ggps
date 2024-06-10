const express = require('express')
const cors = require('cors');
const logger = require('morgan')

const { usersRouter } = require('./routes')
const errorHandler = require('./middlewares/error-handler')

const app = express()

app.use(cors());

app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRouter)

app.use(errorHandler)

module.exports = app
