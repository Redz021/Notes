"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var fs = require('fs');

var session = require('express-session'); // const dblogger = require('mongoose-morgan')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');


var addAndDelete = require('./routes/addAndDelete');

var regAndLogin = require('./routes/regAndLogin');

var userSession = require('./routes/userSession'); // const addAndDelete = require('./database/addAndDelete');


var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public'))); //设置session

app.use(session({
  secret: 'red',
  //对session id 相关的cookie进行加密签名
  cookie: {
    maxAge: 1000 * 60 * 10
  }
})); //数据库操作记录日志
// app.use(dblogger({
//     conncetionString: 'mongodb://localhost:27017/test'
// }))
//解决跨域
// app.all("*", function(req, res, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers", "content-type");
//     //跨域允许的请求方式
//     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options')
//         res.send(200); //让options尝试请求快速结束
//     else
//         next();
// });
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/api', addAndDelete);

app.use('/user', addAndDelete);
app.use('/regLogin', regAndLogin);
app.use('/user', userSession); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;