const mongoose = require('../db')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserTable = mongoose.model('UserTable', UserSchema)

module.exports = UserTable