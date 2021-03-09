const config = require('../config/config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {
  mongoose,
  url: config.url,
  users: require('./user.model')(mongoose)
};

module.exports = db;
