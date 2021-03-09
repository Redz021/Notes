"use strict";

var config = require('../config/config');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = {
  mongoose: mongoose,
  url: config.url,
  users: require('./user.model')(mongoose)
};
module.exports = db;