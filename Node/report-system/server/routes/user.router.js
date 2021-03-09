module.exports = app => {
  const users = require('../controllers/user.controller');
  let router = require('express').Router();
  router.post('/', users.create);
  app.use('/api/user', router);
};
