const fs = require('fs');
const path = require('path');

function file(filename) {
    return path.join(__dirname, 'files', filename);
}

// fs.rmdir(path.join(__dirname, 'files'), function(err) {
//     if(err) {
//         throw err;
//     }
// })


function rmdir(dir, cb) {

    var dirname = path.join(__dirname, dir);

    fs.rmdir(dirname, function(err, files) {
        if(err) {

            if(err.code !== 'ENOTEMPTY') {
                return cb(err, dirname);
            }

            fs.readdir(dirname, function(err, files) {

                if(err) {
                    return cb(err, dirname);
                }

                var counter = 0;

                files.forEach(function(file, index) {

                    fs.unlink(path.join(dirname, file), function(err) {

                        if(!err) {
                            counter++;
                        }

                        if(index + 1 === files.length && counter !== files.length) {
                            return cb(new Error('Nie wszyskie pliki zostały usuniete'), dir);
                        }

                        if(counter === files.length) {
                            return rmdir(dir, cb);
                        }

                    })

                })

            })

        } else {
            cb(null, dir);
        }
    })

}


rmdir('files', function(err, dirname) {

    if(err) {
        throw err;
    }

    console.log('Usunięto');

})