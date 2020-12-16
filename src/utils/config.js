require('dotenv').config()

const { PORT } = process.env
const { NODE_ENV } = process.env
const { SECRET } = process.env

module.exports = {
  PORT,
  NODE_ENV,
  SECRET,
}
