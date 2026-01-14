const fs = require('fs');

fs.mkdir('makeNewFolder' , function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('Folder created successfully!');
  }
});