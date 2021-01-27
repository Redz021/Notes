let http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text-plain' });
    res.end('Hello World\n');
}).listen(8888);
console.log('Server running at xxxx');