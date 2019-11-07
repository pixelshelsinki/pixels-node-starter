const express = require('express')
const cors = require('cors')
const config = require('./utils/config')

// Express instance.
const app = express()

// Apply middlewares.
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

module.exports = app
