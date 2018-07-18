const fs = require('fs');
const path = require('path');
const http = require('http');


const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'text/jpeg'
};

const server = http.createServer(function(req, res) {

    var filename = null,
        file = null;
    console.log(req.url);
    if(req.url === '/' || req.url === '/index.html') {
        filename = 'index.html';
    } else {
        filename = req.url.slice(1);
    }

    file = fs.createReadStream(path.join(__dirname, 'public', filename));

    file.on('error', function(err) {
        res.writeHead(404, 'Not Found');
        res.end();
    });

    res.writeHead(200, {'Content-Type': MIME_TYPES[path.extname(filename)]});
    file.pipe(res);

});



server.listen(8080, function() {
    console.log('uruchomiono');
});