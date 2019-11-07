// Core imports.
const express = require('express')
const Knex = require('knex')
const { Model } = require('objection')

// Middlewares
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Custom middleware.
const { unknownEndpoint } = require('./middleware/unknownEndpoint')
const { errorHandler } = require('./middleware/errorHandler')

// App config.
const config = require('./utils/config')
const knexConfig = require('./knexfile')

// Database.
const knex = config.NODE_ENV === 'development' ? Knex(knexConfig.development) : Knex(knexConfig.production);
Model.knex(knex);

// Express instance.
const app = express()

// Apply middlewares.
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))

// Routes
app.get('/', (req, res) => {
  res.json('Hello World')
})

// Catch unhandled routes, handle uncatched errors.
app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app
