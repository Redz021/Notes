"use strict";

var mongoose = require('../db');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    "default": 30
  },
  sex: {
    type: String
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;