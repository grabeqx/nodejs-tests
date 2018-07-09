const fs = require('fs');
const path = require('path');


fs.exists(path.join(__dirname, 'files', 'lorem1.txt'), function(exist) {
    console.log("exist");
});

fs.stat(path.join(__dirname, 'files', 'lorem2.txt'), function(err, stats) {
    if(err) {
        console.log("Wystąpił błąd" + err.message);
    }

    console.log(`Data utworzenia ${stats.birthtime}`);
    console.log(`Data ostatniej modyfiikacji ${stats.mtime}`);
    console.log(`isFile ${stats.isFile()}`);
    console.log(`isDirestory ${stats.isDirectory()}`);
});

fs.readdir(path.join(__dirname, 'files'), function(err, files) {
    if(err) {
        console.log("Wystąpił błąd" + err.message);
        throw err;
    }

    files.forEach(function(filename) {
        fs.stat(path.join(__dirname, 'files', filename), function(err, stats) {
            if(err) {
                console.log("Wystąpił błąd" + err.message);
                throw err;
            }

            console.log(`Info: ${filename}`);
            console.log(`Data utworzenia: ${stats.birthtime.getFullYear()}\n`);
        })
    })

})