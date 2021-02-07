const db = require('./dbconn').db;

const userSchema = new db.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

const User = db.model('User', userSchema);

// User.create({
//     name: 'Red',
//     age: 22,
//     email: '123@321.com',
//     password: '123456',
//     hobbies: ['Music', 'Cars']
// }).then(res => console.log(res));

User.find().then(res => console.log(res));