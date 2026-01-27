const express = require("express");
const app = express();
const usermodel = require('./models/user');
const postmodel = require('./models/post')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/profile',isLoggedIn, async (req, res) => {
  let user = await usermodel.findOne({email: req.user.email}).populate("posts");
  // console.log(user);
  res.render('profile', {user});
});
app.post('/post',isLoggedIn, async (req, res) => {
  let user = await usermodel.findOne({email: req.user.email});
  let{content} = req.body;
  let post = await postmodel.create({
    user: user._id,
    content
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/register', async (req, res) => {
   let {email, password, username, name, age} = req.body;

   let user = await usermodel.findOne({email});
    if(user){return res.status(409).send("User already register");};

    bcrypt.genSalt(10, (err, salt) => {
       bcrypt.hash(password, salt, async (err, hash) => {
         let user =  await usermodel.create({
            username,
            email, 
            password: hash,
            name,
            age
          });

          let token = jwt.sign({ email: email , userid: user._id}, "shhhh");
          res.cookie("token", token);
          res.send("registered");
       });
    });
});

app.post('/login', async (req, res) => {
  let {email, password} = req.body;

  let user = await usermodel.findOne({email});
  if(!user){return res.status(401).send("Invalid email or password")};

  bcrypt.compare(password, user.password , (err, result) => {
    if(result){
      let token = jwt.sign(
        { email: email , userid: user._id}, 
        "shhhh"
      );
      res.cookie("token", token);
      res.redirect("/profile");  
    }else{
      res.redirect("/login");
    }
  });    
});

app.get('/logout', (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

function isLoggedIn(req, res, next){
  if(!req.cookies.token) {
    // return res.send("you need to login first");
    return res.redirect("/login");
  } 
  try{
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  }catch (err){
    return res.redirect("/login");
  };
};

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});