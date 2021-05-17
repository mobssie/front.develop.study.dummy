const fs = require('fs');

//writeFile
//readFile
fs.readFile('abc.txt', 'utf8', (err,file) => {
    console.log(file);
});