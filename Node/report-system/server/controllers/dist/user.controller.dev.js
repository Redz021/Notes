"use strict";

var db = require('../models');

var config = require('../config/config');

var jwt = require('jsonwebtoken');

var User = db.users;
module.exports = {
  create: function create(req, res) {
    if (!req.body) {
      res.status(400).json({
        msg: '内容不能为空'
      });
      return;
    }

    User.find({
      studyNum: req.body.studyNum
    }).then(function (data) {
      if (data.length == 0) {
        var user = new User({
          studyNum: req.body.studyNum,
          username: req.body.username,
          password: req.body.password,
          type: req.body.type,
          courses: req.body.courses
        });
        user.save(user).then(function (data) {
          res.json(data);
        })["catch"](function (err) {
          res.status(500).json({
            msg: '创建对象时出错' || err.message
          });
        });
      } else {
        res.json({
          msg: '用户已存在'
        });
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }
};