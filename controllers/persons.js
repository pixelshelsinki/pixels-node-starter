const personsRouter = require('express').Router()

// Models
const Person = require('../models/Person')

/**
 * Return list of all persons
 */
personsRouter.get('/', async (request, response, next) => {
  try {
    const people = await Person.query()
    response.json(people)
  } catch (error) {
    next(error)
  }
})

/**
 * Create new person.
 */
personsRouter.post('/', async (request, response, next) => {
  console.log(request.body)

  try {
    const person = await Person
      .query()
      .insert(request.body)

    response.status(201).json(person.toJSON())
  } catch (error) {
    next(error)
  }
})

module.exports = personsRouter
