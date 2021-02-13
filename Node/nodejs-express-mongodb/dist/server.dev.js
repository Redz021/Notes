"use strict";

var express = require('express'); //为rest api建立express应用


var bodyParser = require('body-parser'); //解析请求，生成req.body对象


var cors = require('cors'); //支持多种选项开启CORS的express中间件


var app = express();
var corsOptions = {
  origin: 'http://localhost:8081'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); //链接mongodb

var db = require('./app/models');

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Connected to the database.');
})["catch"](function (err) {
  console.log('Cannot connect to the database.', err);
  process.exit();
});
app.get('/', function (req, res) {
  res.json({
    message: 'Welcome!'
  });
});

require('./app/routes/tutorial.routes')(app);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});