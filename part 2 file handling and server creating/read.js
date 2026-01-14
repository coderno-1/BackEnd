const fs = require('fs');

fs.readFile('data.txt', function(err, data){
  if(err) {
   return console.log(err); 
  }else{
    console.log(data.toString());    
    console.log('Read successfully!');
  }
});