"use strict";

var http = require('http');

var fs = require('fs');

var url = require('url');

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log('Request for ' + pathname + ' recieved.');
  console.log(pathname);
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, {
        'content-type': 'text/html'
      });
    } else {
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      res.write(data.toString());
    }

    res.end();
  });
}).listen(8888);
console.log('Server running at xxx');