"use strict";

var mongoose = require('../db');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
var UserTable = mongoose.model('UserTable', UserSchema);
module.exports = UserTable;