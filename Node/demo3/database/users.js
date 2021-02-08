const mongoose = require('./db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    age: { type: Number, default: 30 },
    sex: { type: String }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;