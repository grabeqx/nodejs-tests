const fs = require('fs');
const path = require('path');

function file(filename) {
    return path.join(__dirname, 'files', filename);
}

// fs.access(file('lorem1.txt'), function(err) {
//     console.log(err ? err : 'ok');
// });

// var access = fs.accessSync('./files/lorem1.txt');
// console.log(access);

// fs.appendFile(file('lorem3.txt'), 'data to append', function(err) {
//     if(err) {
//         throw err;
//     }
// })

// fs.chmod(file('lorem2.txt'), 0o666, function(err) {
//     if(err) {
//         throw err;
//     }
// })

// fs.fstat(file('lorem1.txt'), function(err, stat) {
//     console.log(stat);
// })

// fs.link(file('lorem1.txt'), file('lorem5.txt'), function(err) {
//     if(err) {
//         throw err;
//     }
// })

fs.lstat(file('lorem1.txt'), function(err, stats) {
    console.log(stats);
})