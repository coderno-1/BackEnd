const express = require('express');
const app = express();

const userModel = require('./usermodel');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
  let createuser = await userModel.create({
    name: 'shivam kumar',
    email: 'shivam@example.com',
    username: 'shivam@123'
  });

  res.send(createuser);
});

app.get('/read', async (req, res) => {
  let readuser = await userModel.find();
  // let readuser = await userModel.findOne({username: "Akhilesh"});

  res.send(readuser);
});

app.get('/update', async (req, res) => {
  let updateuser = await userModel.findOneAndUpdate({username: "ram123"}, {name: "jai shree Ram"}, { new: true });

  res.send(updateuser);
});



app.get('/delete', async (req, res) => {
   
  let deleteuser = await userModel.findOneAndDelete({username: "akhilesh114"});

  res.send(deleteuser);
});




app.listen(3000, () =>{
  console.log('Server is running on port 3000');
});