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
  const { body } = request

  try {
    const person = await Person
      .query()
      .insert(body)

    response.status(201).json(person.toJSON())
  } catch (error) {
    next(error)
  }
})

/**
 * Update a person.
 */
personsRouter.put('/:id', async (request, response, next) => {
  const { body } = request
  const { id } = request.params

  try {
    const updatedPerson = await Person.query()
      .findById(id)
      .patch(body)
    response.status(200).json(updatedPerson)
  } catch (error) {
    next(error)
  }
})

/**
 * Delete a person.
 */
personsRouter.delete('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const deletedPerson = await Person.query().deleteById(id)

    response.status(204).json(deletedPerson)
  } catch (error) {
    next(error)
  }
})

module.exports = personsRouter
