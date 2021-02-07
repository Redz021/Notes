const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
}).then(() => console.log('Connection established')).catch(err => console.log(err, 'ERROR!'));

module.exports = {
    db: mongoose
}