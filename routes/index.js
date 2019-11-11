// Express router.
const router = require('express').Router();

// Controllers.
const personRouter = require('../controllers/persons')
const projectRouter = require('../controllers/projects')
const taskRouter = require('../controllers/tasks')
const loginRouter = require('../controllers/login')

// Routes.
router.use('/api/persons', personRouter)
router.use('/api/projects', projectRouter)
router.use('/api/tasks', taskRouter)
router.use('/api/login', loginRouter)

router.get('/', (req, res) => {
  res.json('Hello World')
})

module.exports = router;
