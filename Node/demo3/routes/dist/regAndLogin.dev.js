"use strict";

var express = require('express');

var router = express.Router();

var regAndLogin = require('../api/regAndLogin');

router.post('/regist', regAndLogin.registered);
router.post('/login', regAndLogin.login);
router.post('/logout', regAndLogin.logout);
module.exports = router;