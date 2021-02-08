"use strict";

var express = require('express');

var router = express.Router();

var User = require('./users');

router.post('/add', function (req, res) {
  var user = new User({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex
  });
  user.save(function (err, data) {
    if (err) {
      res.send({
        'code': 1,
        'errorMsg': '新增失败'
      });
    } else {
      res.send({
        'code': 0,
        'message': '新增成功'
      });
    }
  });
});
router.post('/query', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      age = _req$body.age,
      sex = _req$body.sex;
  var obj = {};

  if (name !== '' && name !== undefined) {
    obj['name'] = name;
  }

  if (age !== '' && age !== undefined) {
    obj['age'] = age;
  }

  if (sex !== '' && sex !== undefined) {
    obj['sex'] = sex;
  }

  User.find(obj, function (err, docs) {
    if (err) {
      res.send({
        'code': 1,
        'errorMsg': '查询失败'
      });
    } else {
      res.send(docs);
    }
  });
});
router.post('/del', function (req, res) {
  var id = req.body.id;
  var whereid = {
    '_id': id
  };
  User.remove(whereid, function (err, docs) {
    if (err) {
      res.send({
        'code': 1,
        'errorMsg': '删除失败'
      });
    } else {
      res.send(docs);
    }
  });
});
router.post('/update', function (req, res) {
  var _req$body2 = req.body,
      id = _req$body2.id,
      name = _req$body2.name,
      age = _req$body2.age,
      sex = _req$body2.sex;
  var updateStr = {
    name: name,
    age: age,
    sex: sex
  };
  var ids = {
    _id: id
  };
  User.findByIdAndUpdate(ids, updateStr, function (err, docs) {
    if (err) {
      res.send({
        'code': 1,
        'errorMsg': '更新失败'
      });
    } else {
      res.send(docs); //如何解决？
    }
  });
});
module.exports = router;