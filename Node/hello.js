const fs = require('fs');
const path = require('path');

//writing file
/* fs.writeFile('test.txt', 'Eliassss', (err)=>{
    if(err) throw err;
    console.log('done!');
}); */

//reading file
fs.readFile(path.join(__dirname,'test.txt'), {encoding: 'utf8'}, (error, data)=>{
    if(error) throw error;
    console.log('text: ');
    console.log(data);
});