const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

// App config.
const config = require('../utils/config')

/**
 * Log user in
 * --> Checks username / password
 * --> If correct, returns JWT
 * --> If not, returns false
 */
const login = async (data) => {
  let token = false

  const user = await User.query()
    .where('username', data.username)

  if (user.length) {
    const passwordIsCorrect = await bcrypt.compare(data.password, user[0].password)

    if (passwordIsCorrect) {
      // Store base userdata in token.
      const userData = {
        username: user[0].username,
        id: user[0].id,
      }

      // Sign token.
      token = jwt.sign(userData, config.SECRET)
    }
  }

  return token
}

/**
 * Verify JWT
 */
const authenticate = async (token) => {
  const decodedToken = jwt.verify(token, config.SECRET)

  if (decodedToken.id && decodedToken.username) {
    return true
  }
  return false
}

module.exports = {
  login,
  authenticate,
}
