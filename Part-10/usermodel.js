const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongodb`);

mongoose.userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String
});

module.exports = mongoose.model('User', mongoose.userSchema);