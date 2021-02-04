var http = require('http');
var url = require('url');
const { route } = require('./router');

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' recieved.');
        route(pathname);
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.write('Hello World');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;