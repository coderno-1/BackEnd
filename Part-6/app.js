const express = require('express');
const app = express();
const Path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index");
});

// dynamic routing
app.get("/profile/:username", function(req, res){
  res.send("Welcome " + req.params.username + "! Welcome to my website.");
});

app.get("/author/:username/:age", function(req, res){
   res.send(
    `Welcome ${req.params.username}! You are ${req.params.age} years old.`
  );
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});










// temporay code to understand __dirname................................

// console.log(__dirname );
// console.log(__dirname + "/public");

// const Path = require('path');
// console.log(Path.join(__dirname, "/public"));