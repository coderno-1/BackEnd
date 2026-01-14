const fs = require('fs');

fs.rmdir('makenewfolder' , function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('Folder deleted successfully!');
  }
});