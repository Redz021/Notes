"use strict";

var UserTable = require('../database/models/userTable');

module.exports = {
  registered: function registered(req, res, next) {
    var _req$body = req.body,
        username = _req$body.username,
        password = _req$body.password;
    var regUser = new UserTable({
      username: username,
      password: password
    });
    UserTable.findOne({
      username: username
    }, function (err, doc) {
      if (err) {
        return res.send({
          'code': 1,
          'errorMsg': '网络异常错误'
        });
      } else if (doc) {
        return res.send({
          'code': 1,
          'errorMsg': '用户名已存在'
        });
      } else {
        regUser.save(function (err2, doc2) {
          if (err2) {
            return res.send({
              'code': 1,
              'errorMsg': '注册失败'
            });
          } else {
            return res.send({
              'code': 0,
              'msg': '注册成功',
              'data': doc2
            });
          }
        });
      }
    }); // next()
  },
  login: function login(req, res, next) {
    var _req$body2 = req.body,
        username = _req$body2.username,
        password = _req$body2.password;
    UserTable.findOne({
      username: username,
      password: password
    }, function (err, doc) {
      if (err) {
        return res.send({
          'code': 1,
          'errorMsg': err || '用户名或密码错误'
        });
      } else {
        req.session.username = req.body.username;
        return res.send({
          'code': 0,
          'msg': '登录成功',
          'data': doc
        });
      }
    }); // next()
  },
  logout: function logout(req, res, next) {
    if (req.session.username) {
      req.session.username = '';
      return res.send({
        'code': 1,
        'session': true
      });
    }
  }
};