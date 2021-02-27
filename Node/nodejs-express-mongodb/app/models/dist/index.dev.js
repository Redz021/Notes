"use strict";

var dbConfig = require('../config/config');

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);
db.users = require('./user.model')(mongoose);
module.exports = db;