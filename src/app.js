// Core imports.
const express = require('express')
const Knex = require('knex')
const { Model } = require('objection')

// Middlewares
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

// Custom middleware.
const { unknownEndpoint } = require('./middleware/unknownEndpoint')
const { errorHandler, missedErrorHandler } = require('./middleware/errorHandler')
const { verifyToken } = require('./middleware/verifyToken')

// App config.
const config = require('./utils/config')
const knexConfig = require('../knexfile')

// Database.
const knex = Knex(knexConfig[config.NODE_ENV]);
Model.knex(knex);

// Routes
const routes = require('./routes');

// Express instance.
const app = express()

// Apply middlewares.
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan(config.NODE_ENV === 'development' ? 'dev' : 'tiny'))
app.use(verifyToken)

// Append all routes.
app.use(routes)

// Catch unhandled routes, handle uncatched errors.
app.use(unknownEndpoint)
app.use(errorHandler)
app.use(missedErrorHandler)

// Append knex.destroy method for tests
if (config.NODE_ENV === 'test') {
  app.destroy = () => knex.destroy()
}

module.exports = app
