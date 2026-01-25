const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/part-16");

const userSchema = mongoose.Schema({
  username: {
    type: String
  },
  email: String,
  age: {
    type: Number
  },
  post: [
    {
       type : mongoose.Schema.Types.ObjectId,
       ref: 'post'
    }
  ]
});

module.exports = mongoose.model('user', userSchema);