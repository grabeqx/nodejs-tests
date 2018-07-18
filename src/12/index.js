const http = require('http');

const server = http.createServer(function(req, res) {

    // res.writeHead(200, {
    //     'Content-Type': 'text/html'
    // });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');


    res.write(`<h3>HTTP: ${req.httpVersion} ${req.method} </h3>`);
    res.write(`<h3>URL: ${req.url} </h3>`);
    res.write(`<pre>${JSON.stringify(req.headers, null, 4)}</pre>`);


    res.end();

});


server.listen(8000, function() {

    console.log('server uruchomiono');

})