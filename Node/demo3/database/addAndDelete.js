const express = require('express');
const router = express.Router();
const User = require('./users');

router.post('/add', (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    });
    user.save((err, data) => {
        if (err) {
            res.send({ 'code': 1, 'errorMsg': '新增失败' });
        } else {
            res.send({ 'code': 0, 'message': '新增成功' });
        }
    });
});

router.post('/query', (req, res) => {
    const { name, age, sex } = req.body;
    const obj = {};
    if (name !== '' && name !== undefined) {
        obj['name'] = name;
    }
    if (age !== '' && age !== undefined) {
        obj['age'] = age;
    }
    if (sex !== '' && sex !== undefined) {
        obj['sex'] = sex;
    }
    User.find(obj, (err, docs) => {
        if (err) {
            res.send({ 'code': 1, 'errorMsg': '查询失败' });
        } else {
            res.send(docs);
        }
    });
});

router.post('/del', (req, res) => {
    const id = req.body.id;
    const whereid = { '_id': id };
    User.remove(whereid, (err, docs) => {
        if (err) {
            res.send({ 'code': 1, 'errorMsg': '删除失败' });
        } else {
            res.send(docs);
        }
    });
});

router.post('/update', (req, res) => {
    const { id, name, age, sex } = req.body;
    const updateStr = {
        name: name,
        age: age,
        sex: sex
    };
    const ids = {
        _id: id
    };
    User.findByIdAndUpdate(ids, updateStr, (err, docs) => {
        if (err) {
            res.send({ 'code': 1, 'errorMsg': '更新失败' });
        } else {
            res.send(docs); //如何解决？
        }
    });
});

module.exports = router;