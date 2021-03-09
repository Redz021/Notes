module.exports = (app) => {
  const users = require('../controllers/user.controller')

  let router = require('express').Router()

  router.post('/', users.create)

  router.get('/', users.test)

  router.post('/login', users.login)

  app.use('/api/user', router)
}
