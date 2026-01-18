const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  fs.readdir('./files', function(err, files){
    if(err){
      return res.render('index', { files: [] });
    }
    res.render('index', { files: files });
  });
});

app.post('/create', function(req, res){
  fs.writeFile(`./files/$req.body.Title.split(' ').join('_').toLowerCase().txt` , req.body.details, function(err){
     res.redirect('/');
  });
}
);

app.listen(3000, function(){
  console.log('server started on port 3000');
});