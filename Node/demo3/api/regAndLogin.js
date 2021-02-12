const UserTable = require('../database/models/userTable')

module.exports = {
    registered: (req, res, next) => {
        const { username, password } = req.body
        const regUser = new UserTable({
            username: username,
            password: password
        })
        UserTable.findOne({ username: username }, (err, doc) => {
                if (err) {
                    return res.send({ 'code': 1, 'errorMsg': '网络异常错误' })
                } else if (doc) {
                    return res.send({ 'code': 1, 'errorMsg': '用户名已存在' })
                } else {
                    regUser.save((err2, doc2) => {
                        if (err2) {
                            return res.send({ 'code': 1, 'errorMsg': '注册失败' })
                        } else {
                            return res.send({ 'code': 0, 'msg': '注册成功', 'data': doc2 })
                        }
                    })
                }
            })
            // next()
    },
    login: (req, res, next) => {
        const { username, password } = req.body
        UserTable.findOne({ username: username, password: password }, (err, doc) => {
                if (err) {
                    return res.send({ 'code': 1, 'errorMsg': err || '用户名或密码错误' })
                } else {
                    req.session.username = req.body.username
                    return res.send({ 'code': 0, 'msg': '登录成功', 'data': doc })
                }
            })
            // next()
    },
    logout: (req, res, next) => {
        if (req.session.username) {
            req.session.username = ''
            return res.send({ 'code': 1, 'session': true })
        }
    }
}