const fs = require('fs');
const path = require('path');

function file(filename) {
    return path.join(__dirname, 'files', filename);
}

// fs.readFile(file('lorem1.txt'), 'utf8', function(err, data) {
//     if(err) {
//         throw err;
//     }

//     // console.log(data);
// });

// var lorem3 = fs.createReadStream(file('lorem2.txt'), {
//     encoding: 'utf8'
// });

// lorem3.pipe(process.stdout);