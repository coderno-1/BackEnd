const fs = require('fs');

fs.copyFile('data.txt', 'data_copy.txt', function(err){
  if(err) {
   return console.error(err); 
  }else{
    console.log('Copy successfully!');
  }
});

// 