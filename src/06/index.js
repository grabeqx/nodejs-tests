const fs = require('fs');
const path = require('path');

function file(filename) {
    return path.join(__dirname, 'files', filename);
}

// fs.mkdir(path.join(__dirname, 'files'), function(err){
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// });


// fs.writeFile(file('lorem1.txt'), '', function(err) {
//         if(err) {
//             console.log('nie udało się utoworzyć pliku');
//             throw err;
//         }
// });

// fs.appendFile(file('lorem1.txt'), Date.now() + '\n', function(err) {
//     if(err) {
//         console.log('nie udało się utoworzyć pliku');
//         throw err;
//     }

//     console.log('Dodano');
// });


// var lorem = fs.createWriteStream(file('lorem2.txt'));

// lorem.on('end', function() {
//     console.log('Zakończono');
// });

// var lorem1 = fs.createReadStream(file('lorem1.txt'));

// lorem1.pipe(lorem);

fs.mkdtemp(path.join(__dirname, 'uploads-'), function(err, dir) {
    console.log(`nowy katalog: ${dir}`);
})