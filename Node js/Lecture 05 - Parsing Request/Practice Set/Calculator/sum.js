const sumRequestHandler = (req, res) => {
  console.log("IN Sum request handler", req.url);

  const body = [];
  req.on('data', (chunk) => {
    // console.log(chunk);
    body.push(chunk);
  });
  req.on('end', () => {
    const bodystr = Buffer.concat(body).toString();
    const paramas = new URLSearchParams(bodystr);

    const bodyObj = Object.fromEntries(paramas);
    // console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html> 
      <head><title>Calculator</title></head> 
      <body> 
         <h1>Your Sum is: ${result}</h1>
      </body> 
    <html>
    `);
  }); 
   

};

exports.sumRequestHandler = sumRequestHandler;
