const express = require('express')
const router = express.Router()
const regAndLogin = require('../api/regAndLogin')

router.post('/regist', regAndLogin.registered)
router.post('/login', regAndLogin.login)
router.post('/logout', regAndLogin.logout)

module.exports = router