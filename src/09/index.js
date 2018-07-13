const fs = require("fs");
const path = require("path");
const argv = require('./argv');


if(!argv.validate(['dir', 'ext', 'format'])) {
    throw new Error('Nie podano poprawnych parametrów');
}

var dir = path.join(__dirname, argv.get('dir'));

fs.readdir(dir, function(err, files) {

    if(err) {
        throw err;
    }

});