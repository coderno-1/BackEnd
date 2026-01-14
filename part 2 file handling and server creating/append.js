const fs = require('fs');

fs.appendFile('first.txt', ' asha kartha hu ku thik ho', function(err){
  if(err) {
   return console.log(err); 
  }else{
    console.log('Append successfully!');
  }
});




















// End of the code