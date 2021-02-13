"use strict";

var db = require('../models');

var tutorialModel = require('../models/tutorial.model');

var Tutorial = db.tutorials;

exports.create = function (req, res) {
  //验证请求
  if (!req.body.title) {
    res.status(400).send({
      message: '内容不能为空'
    });
    return;
  } //创建对象


  var tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }); //保存到数据库

  tutorial.save(tutorial).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || '创建对象时出错'
    });
  });
};

exports.findAll = function (req, res) {
  var title = req.query.title;
  var condition = title ? {
    title: {
      $regex: new RegExp(title),
      $options: 'i'
    }
  } : {};
  Tutorial.find(condition).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || '查找时出现错误'
    });
  });
};

exports.findOne = function (req, res) {
  var id = req.params.id;
  Tutorial.findById(id).then(function (data) {
    if (!data) {
      res.status(404).send({
        message: "\u672A\u627E\u5230id\u4E3A".concat(id, "\u7684\u5BF9\u8C61")
      });
    } else {
      res.send(data);
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "\u67E5\u627Eid\u4E3A".concat(id, "\u7684\u5BF9\u8C61\u65F6\u51FA\u73B0\u9519\u8BEF:").concat(err)
    });
  });
};

exports.update = function (req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: '更新的内容不能为空'
    });
  }

  var id = req.params.id;
  Tutorial.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false
  }).then(function (data) {
    if (!data) {
      res.status(404).send({
        message: "\u65E0\u6CD5\u66F4\u65B0id\u4E3A".concat(id, "\u7684\u5BF9\u8C61")
      });
    } else {
      res.send({
        message: '更新成功'
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "\u66F4\u65B0id\u4E3A".concat(id, "\u7684\u5BF9\u8C61\u65F6\u51FA\u9519:").concat(err)
    });
  });
};

exports["delete"] = function (req, res) {
  var id = req.params.id;
  Tutorial.findByIdAndRemove(id).then(function (data) {
    if (!data) {
      res.status(404).send({
        message: "\u65E0\u6CD5\u5220\u9664id\u4E3A".concat(id, "\u7684\u5BF9\u8C61")
      });
    } else {
      res.send({
        message: '删除成功'
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "\u5220\u9664id\u4E3A".concat(id, "\u7684\u5BF9\u8C61\u65F6\u51FA\u9519:").concat(err)
    });
  });
};

exports.deleteAll = function (req, res) {
  Tutorial.deleteMany({}).then(function (data) {
    res.send({
      message: "".concat(data.deleteCount, " \u6761\u6570\u636E\u88AB\u6210\u529F\u5220\u9664")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || '删除时出错'
    });
  });
};

exports.findAllPublished = function (req, res) {
  Tutorial.fund({
    published: true
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || '查找时出错'
    });
  });
};