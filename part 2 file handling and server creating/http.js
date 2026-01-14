const http = require('http');

const server = http.createServer(function(req, res){
  res.end("Hello from the other side");
});

server.listen(3000);