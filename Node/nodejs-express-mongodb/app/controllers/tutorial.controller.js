const db = require('../models')
const tutorialModel = require('../models/tutorial.model')
const Tutorial = db.tutorials

exports.create = (req, res) => {
    //验证请求
    if (!req.body.title) {
        res.status(400).send({
            message: '内容不能为空'
        })
        return
    }

    //创建对象
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })

    //保存到数据库
    tutorial.save(tutorial).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || '创建对象时出错'
        })
    })
}

exports.findAll = (req, res) => {
    const title = req.query.title
    let condition = title ? {
        title: {
            $regex: new RegExp(title),
            $options: 'i'
        }
    } : {}

    Tutorial.find(condition).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || '查找时出现错误'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Tutorial.findById(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `未找到id为${id}的对象`
            })
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({
            message: `查找id为${id}的对象时出现错误:${err}`
        })
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: '更新的内容不能为空'
        })
    }

    const id = req.params.id
    Tutorial.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false
        })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `无法更新id为${id}的对象`
                })
            } else {
                res.send({
                    message: '更新成功'
                })
            }
        }).catch(err => {
            res.status(500).send({
                message: `更新id为${id}的对象时出错:${err}`
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Tutorial.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `无法删除id为${id}的对象`
            })
        } else {
            res.send({
                message: '删除成功'
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `删除id为${id}的对象时出错:${err}`
        })
    })
}

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deleteCount} 条数据被成功删除`
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || '删除时出错'
            })
        })
}

exports.findAllPublished = (req, res) => {
    Tutorial.find({
            published: true
        })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || '查找时出错'
            })
        })
}