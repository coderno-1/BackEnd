const fs = require('fs');

fs.rename('first.txt', 'data.txt', function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('Rename successfully!');
  }
});