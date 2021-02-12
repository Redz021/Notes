"use strict";

var express = require('express');

var router = express.Router();

var userSession = require('../api/userSession');

router.post('/usersession', userSession.usersession);
module.exports = router;