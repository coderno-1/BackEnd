const http = require("http");
 

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>KG Coding</title></head>');
    res.write('<body> <h1>Welcome to home page. </h1> </body>');
    res.write('</html>');
    return res.end();

  } else if (req.url === "/products") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>KG Coding</title></head>');
    res.write('<body> <h1>all product are.....</h1> </body>');
    res.write('</html>');
    return res.end();
  }  
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>KG Coding</title></head>');
    res.write('<body> <h1> Helooo bro, this is my first backed to add html</h1> </body>');
    res.write('</html>');
    res.end();
 

  // process.exit()
});

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
