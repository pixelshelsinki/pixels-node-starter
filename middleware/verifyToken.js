const loginService = require('../services/loginService.js')

/**
 * See if request contains
 * --> Authorization header
 * --> With Bearer token
 */
const verifyToken = async (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    const token = authorization.substring(7)

    //Verify token
    request.authorized = await loginService.authenticate(token)
  } else {
    request.authorized = false
  }
  next()
}

module.exports = {
  verifyToken,
}