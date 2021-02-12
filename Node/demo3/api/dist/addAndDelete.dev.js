"use strict";

var User = require('../database/models/users');

module.exports.add = function (req, res, next) {
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
  }); // next()
};

module.exports.query = function (req, res, next) {
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

  var pageSize = req.body.pageSize ? req.body.pageSize : 10;
  var curPage = req.body.curPage ? req.body.curPage : 1;
  var skipCount = (curPage - 1) * pageSize;
  User.count(obj, function (err, total) {
    User.find(obj).limit(pageSize).skip(skipCount).exec(function (err2, docs) {
      if (err2) {
        res.send({
          'code': 1,
          'errorMsg': '查询失败'
        });
      } else {
        res.send({
          'code': 0,
          'msg': '查询成功',
          'pager': {
            totalCount: total,
            pageSize: pageSize,
            curPage: curPage
          },
          'data': docs
        });
      }
    });
  }); // next()
  // User.find(obj, (err, docs) => {
  //     if (err) {
  //         res.send({ 'code': 1, 'errorMsg': '查询失败' })
  //     } else {
  //         res.send(docs)
  //     }
  // })
};

module.exports.del = function (req, res, next) {
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
  }); // next()
};

module.exports.update = function (req, res, next) {
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
      res.send(docs);
    }
  }); // next()
};