const loginRouter = require('express').Router()
const loginService = require('../services/loginService.js')

/**
 * Log user in
 */
loginRouter.post('/', async (request, response, next) => {
  const { body } = request

  try {
    const result = await loginService.login(body)

    if (result) {
      response.status(200).json(result)
    } else {
      response.status(401).json({
        error: 'invalid username or password',
      })
    }
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
