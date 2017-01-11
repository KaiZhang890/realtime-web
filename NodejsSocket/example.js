/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from calle zhang\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
var s = require('net').Socket();
s.connect(80, 'google.com');
s.write('GET http://www.google.com/ HTTP/1.1\n\n');

s.on('data', function(d){
    console.log(d);
});

s.end();
