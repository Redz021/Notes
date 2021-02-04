"use strict";

var fs = require('fs');

var _require = require('process'),
    on = _require.on;

var data = '';
var readerStream = fs.createReadStream('../test.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
  data += chunk;
});
readerStream.on('end', function () {
  console.log(data);
});
readerStream.on('error', function (err) {
  console.log(err.stack);
});
console.log('Completed');