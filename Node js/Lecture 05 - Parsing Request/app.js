const http = require("http");
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});