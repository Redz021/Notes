var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    // res.write('got it');
    res.end('got it');
})
module.exports = router;