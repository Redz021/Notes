const express = require('express')

const app = express()

module.exports.usersession = (req, res, next) => {
    if (!req.session.username) {
        return res.send({ 'code': 1, 'session': true })
    } else {
        return res.send({ 'code': 0, 'session': false, 'data': req.session })
    }
}