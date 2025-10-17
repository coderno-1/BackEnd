const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === '/home'){
    res.write(`<h1>Welcome to Home pages`);
    return res.end();
  }else if(req.url === '/about'){
    res.write(`<h1>Welcome to About pages`);
    return res.end();
  }else if(req.url === '/contact'){
    res.write(`<h1>Welcome to Contact pages`);
    return res.end();
  }else if(req.url === '/services'){
    res.write(`<h1>Welcome to Services pages`);
    return res.end();
  }else if(req.url === '/term&condition'){
    res.write(`<h1>Welcome to Term& Conditions pages`);
    return res.end();
  }

  res.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
    <style>
     *{
    margin:0;
    padding:0;
    }
      .nav{
        width: 100%;
        height: 60px;
      }
      .navbar{
        width: 100%;
        height: 60px;
        background-color: rgb(64, 68, 71);
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .navbar li {
        list-style-type: none;
      }
      .navbar li a {
        font-size: 1.2rem;
        color: rgba(251, 251, 251, 1);
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul class="navbar">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">contact</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/term&condition">terms & Conditions</a></li>
      </ul>
    </nav>
  </body>
</html>
`);

  res.end();
});

const PORT = 3003;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
