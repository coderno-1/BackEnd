import express from 'express'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req , res){
  res.send("This is home page")
});

app.get("/About", function(req , res){
  res.send("About page")
});
app.get("/profile", function(req , res){
  res.send("Profile page")
});

// error show on console
app.get("/contact", function(req , res, next){
  return next(new Error('not implemented!'));
});

// show on webpage
// error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);