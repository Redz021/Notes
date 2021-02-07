"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
}).then(function () {
  return console.log('Connection established');
})["catch"](function (err) {
  return console.log(err, 'ERROR!');
});
module.exports = {
  db: mongoose
};