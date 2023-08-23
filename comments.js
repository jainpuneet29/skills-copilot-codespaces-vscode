// create web server

var http = require('http');

// create web server object
var server = http.createServer(function(req, res) {
  // write response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // write response content
  res.end('Hello World\n');
});

// listen on port 3000
server.listen(3000, '
