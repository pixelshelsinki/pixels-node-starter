const projectsRouter = require('express').Router()

// Models
const Project = require('../models/Project')

/**
 * Return list of all projects
 */
projectsRouter.get('/', async (request, response, next) => {
  try {
    const projects = await Project.query().withGraphFetched('tasks')
    response.json(projects)
  } catch (error) {
    next(error)
  }
})

/**
 * Create new project.
 */
projectsRouter.post('/', async (request, response, next) => {
  const { body } = request

  try {
    const project = await Project
      .query()
      .insert(body)

    response.status(201).json(project.toJSON())
  } catch (error) {
    next(error)
  }
})

/**
 * Update a project.
 */
projectsRouter.put('/:id', async (request, response, next) => {
  const { body } = request
  const { id } = request.params

  try {
    const updatedproject = await Project.query()
      .findById(id)
      .patch(body)
    response.status(200).json(updatedproject)
  } catch (error) {
    next(error)
  }
})

/**
 * Delete a project.
 */
projectsRouter.delete('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const deletedproject = await Project.query().deleteById(id)

    response.status(204).json(deletedproject)
  } catch (error) {
    next(error)
  }
})

module.exports = projectsRouter
