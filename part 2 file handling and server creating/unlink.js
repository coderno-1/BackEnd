const fs = require('fs');

fs.unlink('data_copy.txt', function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('File deleted successfully!');
  }
});