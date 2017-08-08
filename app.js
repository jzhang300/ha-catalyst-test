const http = require('http');
const sqrtSeconds = require('./squareRootSeconds');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${sqrtSeconds()}`);
});

server.listen(3000, 'localhost');
