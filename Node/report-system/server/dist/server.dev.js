"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var config = require('./config/config');

var jwt = require('jsonwebtoken');

var app = express(); //配置cors

var corsOptions = {
  origin: 'http://localhost:8080'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); //链接至数据库

var db = require('./models');

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('已连接至数据库');
})["catch"](function (err) {
  console.log('连接失败', err);
  process.exit();
}); //配置路由

require('./routes/user.router')(app); //启动


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("\u5DF2\u5728".concat(PORT, "\u7AEF\u53E3\u4E0A\u6210\u529F\u8FD0\u884C"));
});