const tasksRouter = require('express').Router()

// Models
const Task = require('../models/Task')

/**
 * Return list of all tasks
 */
tasksRouter.get('/', async (request, response, next) => {
  try {
    const tasks = await Task.query().withGraphFetched('project')
    response.json(tasks)
  } catch (error) {
    next(error)
  }
})

/**
 * Create new task.
 */
tasksRouter.post('/', async (request, response, next) => {
  const { body } = request

  try {
    const task = await Task
      .query()
      .insert(body)

    response.status(201).json(task.toJSON())
  } catch (error) {
    next(error)
  }
})

/**
 * Update a task.
 */
tasksRouter.put('/:id', async (request, response, next) => {
  const { body } = request
  const { id } = request.params

  try {
    const updatedtask = await Task.query()
      .findById(id)
      .patch(body)
    response.status(200).json(updatedtask)
  } catch (error) {
    next(error)
  }
})

/**
 * Delete a task.
 */
tasksRouter.delete('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const deletedtask = await Task.query().deleteById(id)

    response.status(204).json(deletedtask)
  } catch (error) {
    next(error)
  }
})

module.exports = tasksRouter
