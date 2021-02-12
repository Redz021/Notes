const User = require('../database/models/users');

module.exports.add = (req, res, next) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    })
    user.save((err, data) => {
            if (err) {
                res.send({ 'code': 1, 'errorMsg': '新增失败' })
            } else {
                res.send({ 'code': 0, 'message': '新增成功' })
            }
        })
        // next()
}

module.exports.query = (req, res, next) => {
    const { name, age, sex } = req.body
    const obj = {}
    if (name !== '' && name !== undefined) {
        obj['name'] = name
    }
    if (age !== '' && age !== undefined) {
        obj['age'] = age
    }
    if (sex !== '' && sex !== undefined) {
        obj['sex'] = sex
    }
    const pageSize = req.body.pageSize ? req.body.pageSize : 10;
    const curPage = req.body.curPage ? req.body.curPage : 1;
    const skipCount = (curPage - 1) * pageSize;

    User.count(obj, (err, total) => {
            User.find(obj).limit(pageSize).skip(skipCount).exec((err2, docs) => {
                if (err2) {
                    res.send({ 'code': 1, 'errorMsg': '查询失败' })
                } else {
                    res.send({
                        'code': 0,
                        'msg': '查询成功',
                        'pager': { totalCount: total, pageSize: pageSize, curPage: curPage },
                        'data': docs
                    })
                }
            })
        })
        // next()
        // User.find(obj, (err, docs) => {
        //     if (err) {
        //         res.send({ 'code': 1, 'errorMsg': '查询失败' })
        //     } else {
        //         res.send(docs)
        //     }
        // })
}

module.exports.del = (req, res, next) => {
    const id = req.body.id
    const whereid = { '_id': id }
    User.remove(whereid, (err, docs) => {
            if (err) {
                res.send({ 'code': 1, 'errorMsg': '删除失败' })
            } else {
                res.send(docs)
            }
        })
        // next()
}

module.exports.update = (req, res, next) => {
    const { id, name, age, sex } = req.body
    const updateStr = {
        name: name,
        age: age,
        sex: sex
    }
    const ids = {
        _id: id
    }
    User.findByIdAndUpdate(ids, updateStr, (err, docs) => {
            if (err) {
                res.send({ 'code': 1, 'errorMsg': '更新失败' })
            } else {
                res.send(docs)
            }
        })
        // next()
}