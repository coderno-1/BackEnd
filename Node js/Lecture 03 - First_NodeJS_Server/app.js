// const http = require('http');
// function requestListener(req , res) {
//   console.log(req);
// }
// http.createServer(requestListener);



const http = require('http');

const server = http.createServer((req , res) => {
  console.log(req);
  // process.exit();
});

const PORT = 3002;

server.listen(PORT, () => {
    console.log(`server running on address http://localhost:${PORT}`)
})  

 

