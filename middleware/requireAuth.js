/**
 * Require auth token on endpoint
 * Optional middleware for locking API behind authentication
 */
const requireAuth = async (request, response, next) => {
  if (!request.authorized) {
    return response.status(401).json({ error: 'Authentication token required' })
  }
  next()
}

module.exports = {
  requireAuth,
}
