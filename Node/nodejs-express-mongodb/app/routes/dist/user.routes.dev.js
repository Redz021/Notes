"use strict";

module.exports = function (app) {
  var users = require('../controllers/user.controller');

  var router = require('express').Router();

  router.post('/', users.create);
  router.get('/', users.test);
  router.post('/login', users.login);
  app.use('/api/user', router);
};