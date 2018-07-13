const fs = require("fs");
const path = require("path");
const argv = require('./argv');
const sortByDate = require('./utils').sortByDate;
const newFileName = require('./utils').newFileName;

if(!argv.validate(['dir', 'ext', 'format'])) {
    throw new Error('Nie podano poprawnych parametrów');
}

var dir = path.join(__dirname, argv.get('dir'));

fs.readdir(dir, function(err, files) {

    if(err) {
        throw err;
    }

    var validFiles = files.filter(function(file) {
        return path.extname(file).slice(1) ===  argv.get('ext');
    });

    validFiles = sortByDate(validFiles, dir);

    validFiles.forEach(function(file, index) {

        try {
            fs.renameSync(path.join(dir, file), path.join(dir, newFileName(argv.get('format'), argv.get('ext'), index + 1)));
        } catch(e) {
            throw new Error('Nie mozna zmienić');
        }

    });

});
