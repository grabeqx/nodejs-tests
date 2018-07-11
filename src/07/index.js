const fs = require('fs');
const path = require('path');

function file(filename) {
    return path.join(__dirname, 'files', filename);
}

// fs.rename(file('lorem1.txt'), file('lorem2.txt'), function(err) {
//     if(err) {
//         throw err;
//     }
// })

// fs.rename(file('lorem2.txt'), path.join(__dirname, 'newfiles', 'lorem1.txt'), function(err) {

//     if(err) {
//         throw err;
//     }

// });

// function moveFileTo(filepath, directory, cb) {

//     filepath = path.join(__dirname, path.normalize(filepath));

//     fs.mkdir(path.join(__dirname, directory), function(err) {

//         if(err && arr.code !== 'EEXIST') {
//             return cb(err, filepath, directory);
//         }

//         fs.rename(filepath, path.join(__dirname, directory, path.basename(filepath)), function(err) {
//             if(err) {
//                 return cb(err, filepath, directory);
//             }
//         })
//     })

// }


// moveFileTo('files/lorem1.txt', 'newFiles', function(err, filepath, directory) {

//     if(err) {
//         throw err;
//     }

//     console.log('Przeniesiono');

// })


