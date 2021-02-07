"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
}).then(function () {
  return console.log('Connection established');
})["catch"](function (err) {
  return console.log(err, 'ERROR!');
});
var courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});
var Course = mongoose.model('Course', courseSchema); //插入文档
// Course.create({
//     name: 'JavaScript',
//     author: 'red',
//     isPublished: false
// }).then(result => {
//     console.log(result);
// });
//查找文档
// Course.find().then(result => console.log(result));
//按条件查找

Course.findOne({
  name: 'nodejs基础'
}).then(function (res) {
  return console.log(res);
});