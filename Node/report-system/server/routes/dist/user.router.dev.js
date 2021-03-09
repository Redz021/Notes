"use strict";

module.exports = function (app) {
  var users = require('../controllers/user.controller');

  var router = require('express').Router();

  router.post('/', users.create);
  app.use('/api/user', router);
};