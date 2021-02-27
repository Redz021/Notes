"use strict";

var db = require('../models'); // const crypto = require('crypto')


var _require = require('../models'),
    users = _require.users;

var config = require('../config/config');

var jwt = require('jsonwebtoken');

var User = db.users;
module.exports = {
  test: function test(req, res) {
    res.send({
      message: 'success'
    });
  },
  create: function create(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: '内容不能为空'
      });
      return;
    } //创建对象


    var user = new User({
      studyNum: req.body.studyNum,
      username: req.body.username,
      password: req.body.password,
      type: req.body.type
    }); //保存到数据库

    user.save(user).then(function (data) {
      res.send(data);
    })["catch"](function (err) {
      res.status(500).send({
        message: err.message || '创建对象时出错'
      });
    });
  },
  login: function login(req, res) {
    if (req.body.studyNum == undefined || req.body.studyNum == '') {
      res.send({
        msg: '用户名不能为空'
      });
    } else if (req.body.password == undefined || req.body.password == '') {
      res.send({
        msg: '密码不能为空'
      });
    } else {
      // let md5 = crypto.createHash('md5')
      // let newPwd = md5.update(req.body.password).digest('hex')
      var condition = {
        studyNum: req.body.studyNum,
        password: req.body.password
      };
      console.log(condition);
      User.findOne(condition, function (err, doc) {
        if (err) {
          res.status(400).send({
            msg: '用户名或密码错误'
          });
        } else {
          var token = jwt.sign({
            id: doc.id,
            username: doc.username,
            type: doc.type
          }, config.secretKey, {
            expiresIn: '60s'
          });
          res.send({
            token: token,
            user: doc
          });
        }
      });
    }
  }
};