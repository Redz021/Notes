var fs = require('fs');
const { on } = require('process');
var data = '';

var readerStream = fs.createReadStream('../test.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', (chunk) => {
    data += chunk;
});
readerStream.on('end', () => {
    console.log(data);
});
readerStream.on('error', (err) => {
    console.log(err.stack);
});
console.log('Completed');