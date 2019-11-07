// Core imports.
const express = require('express')

// Middlewares
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const config = require('./utils/config')

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

module.exports = app
