// //Part-1: cookie set and read using cookie-parser middleware in Express.js
// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();

// app.use(cookieParser());
 
// app.get('/', (req, res) => {
//     res.cookie("name", "akhilesh");
//     res.send('Cookie has been set');
// }); 

// app.get('/read', (req, res) => {
//     console.log(req.cookies);
//     res.send('Cookie has been set');
// }); 

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });   


// //Part-2-A: bcrypt how use for hashing password  encription  in Node.js
// const express = require('express');
// const app = express();

// const bcrypt = require('bcrypt');

// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//        bcrypt.hash("Akhilesh", salt, function(err, hash) {
//         console.log(hash);
//       });
//     });
// }); 
 

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });    


// //Part-2-B: bcrypt how use for hashing password  decription  in Node.js
// const express = require('express');
// const app = express();

// const bcrypt = require('bcrypt');

// app.get('/', (req, res) => {
//      // Load hash from your password DB.
//      bcrypt.compare("Akhilesh","$2b$10$uLpmBxYxgLPJAjEfJaEML.utL2cBSZzZ2xU5ZKBXXnHcPjGs0I4Bi", function(err, result) {
//         console.log(result);
//     });
// }); 
 

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });    



//Part-3: jwt json web token  in Node.js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cookieParser());



app.get('/', (req, res) => {
    let token = jwt.sign({email: "Akhilesh@gmail.com"}, "secretkey");
      res.cookie("token", token);
      console.log(token);
      res.send('Token has been generated and set in cookie');
   
});

app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secretkey"); 
    console.log(data);
    res.send('Token has been verified and data logged');
 
});
                  

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});