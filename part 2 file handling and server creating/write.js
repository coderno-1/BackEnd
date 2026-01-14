const fs = require('fs');

fs.writeFile('first.txt', 'kase ho bro', function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('File created successfully!');
  }
});


















