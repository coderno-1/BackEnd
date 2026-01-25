const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get("/", (req, res) => {
  res.send("hlo");
});
app.get("/create", async (req, res) => {
  const user = await userModel.create({
    username: "akhilesh",
    age: 19,
    email: "akhilesh@gmail.com"
  });
  res.send(user);
});
app.get("/post/create", async (req, res) => {
 const post = await postModel.create({
      postdata : "Hello bro how are you",
      user: "6975d38d91fc8d73e5558177",
  });
  let user = await userModel.findOne({_id: "6975d38d91fc8d73e5558177"});
  user.post.push(post._id);
  await user.save();

  res.send({ postdata: post, userdata: user});
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});