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

app.get("/files/:filename", function(req, res){
  fs.readFile(`./files/${req.params.filename}`, function(err, filedata){
    // console.log(filedata.toString());
    if(err){
      return res.status(404).send('File not found');
    }
    res.render("show", { filename: req.params.filename.split('_').join(' ').toLowerCase().replace('.txt', ''), filedata: filedata });  
  })
});

app.get('/edit/:filename', function(req, res){
  res.render('edit', { filename: req.params.filename });
})

app.post('/create', function(req, res){
  fs.writeFile(`./files/${req.body.Title.split(' ').join('_').toLowerCase()}.txt` , req.body.details, function(err){
     res.redirect('/');
  });
});

app.post('/rename', function(req, res){
  fs.rename(`./files/${req.body.oldfilename}`, `./files/${req.body.newfilename.split(' ').join('_').toLowerCase()}.txt`, function(err){
      if(err){
        return res.status(500).send('Error renaming file');
      }
      res.redirect('/');
  });
});

app.listen(3000, function(){
  console.log('server started on port 3000');
});