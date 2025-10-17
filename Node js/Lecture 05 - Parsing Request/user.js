
const fs = require('fs');
 

const requestHandler = ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>KG Coding</title></head>');
    res.write('<body> <h1>Enter your details:</h1> ');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br>');
    res.write('<input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);  
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const BodyObject = {};
      // for(const [key, val] of params.entries()){
      //   BodyObject[key] = val;
      // }
      const BodyObject = Object.fromEntries(params);
      console.log(BodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(BodyObject));
    })
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
  }  
    res.setHeader("Content-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>KG Coding</title></head>');
    res.write('<body> <h1> Helooo bro, this is my first backed to add html</h1> </body>');
    res.write('</html>');
    res.end();
});


module.exports = requestHandler;


