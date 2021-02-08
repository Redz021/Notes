const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/test';

mongoose.connect(DB_URL);

mongoose.connection.on('connected', () => {
    console.log(`Connect established at ${DB_URL}.`);
});

mongoose.connection.on('error', (err) => {
    console.log(`ERROR:${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Connection closed.`);
});

module.exports = mongoose;