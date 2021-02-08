"use strict";

var mongoose = require('mongoose');

var DB_URL = 'mongodb://localhost:27017/test';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log("Connect established at ".concat(DB_URL, "."));
});
mongoose.connection.on('error', function (err) {
  console.log("ERROR:".concat(err));
});
mongoose.connection.on('disconnected', function () {
  console.log("Connection closed.");
});
module.exports = mongoose;