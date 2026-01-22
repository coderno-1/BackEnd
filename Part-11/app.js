const express = require('express');
const path = require('path');
const userModel = require('./models/user');

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', { title: 'Part-11' });
});

app.get('/read', async (req, res) => {
  let Users = await userModel.find();
  res.render('read', { title: 'Read All Users', Users });
});

app.get('/delete/:id', async (req, res) => {
  await userModel.findByIdAndDelete({ _id: req.params.id });
  res.redirect("/read");
});  

app.get('/edit/:userid', async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  res.render("edit", {user});
});  
 


app.post("/create", async (req, res) => {
  let { name, email, image} = req.body;
  let createUser = await userModel.create({
     name,
     email,
     image
  });
  res.redirect("/read");
});

app.post("/update/:id", async (req, res) => {
  let { name, email, image} = req.body;
  let updateUser = await userModel.findByIdAndUpdate(req.params.id, {
     name,
     email,
     image
  });
  res.redirect("/read");
});




app.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});