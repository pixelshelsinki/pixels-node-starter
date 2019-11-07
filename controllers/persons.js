const personsRouter = require('express').Router()

// Models
const Person = require('../models/Person')

personsRouter.get('/', async (request, response) => {
  const people = await Person.query()
  response.json(people)
})

module.exports = personsRouter
