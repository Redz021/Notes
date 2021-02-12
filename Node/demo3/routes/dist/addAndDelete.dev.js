"use strict";

var express = require('express');

var router = express.Router();

var User = require('../api/addAndDelete');

router.post('/add', User.add);
router.post('/query', User.query);
router.post('/del', User.del);
router.post('/update', User.update);
module.exports = router;