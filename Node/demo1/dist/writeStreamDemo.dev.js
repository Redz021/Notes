"use strict";

var fs = require('fs');

var data = '';
var writerStream = fs.createWriteStream('../output.txt');

for (var i = 0; i < 100; i++) {
  data = 'a' + i;
  writerStream.write(data, 'utf-8');
}

writerStream.end();
writerStream.on('finish', function () {
  console.log('finished');
});
writerStream.on('error', function (err) {
  console.log(err.stack);
});
console.log('Completed');