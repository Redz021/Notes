const db = require('../models');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const User = db.users;

module.exports = {
  create: (req, res) => {
    if (!req.body) {
      res.status(400).json({
        msg: '内容不能为空'
      });
      return;
    }
    User.find({ studyNum: req.body.studyNum })
      .then(data => {
        if (data.length == 0) {
          const user = new User({
            studyNum: req.body.studyNum,
            username: req.body.username,
            password: req.body.password,
            type: req.body.type,
            courses: req.body.courses
          });

          user
            .save(user)
            .then(data => {
              res.json(data);
            })
            .catch(err => {
              res.status(500).json({ msg: '创建对象时出错' || err.message });
            });
        } else {
          res.json({ msg: '用户已存在' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
