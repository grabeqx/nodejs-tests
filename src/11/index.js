const fs = require('fs');
const net = require('net');

const server = net.createServer(function(socket) {

    // socket.write('hello word');
    // socket.end('hello word!\n');

    var counter = 0;

    var interval = setInterval(function() {
        if(counter === 10) {
            clearInterval(interval);
            socket.end();
            return;
        }
        socket.write(String(++counter))
    }, 1000);


    socket.on('data', function(data) {
        console.log(data.toString());
    })


});

server.listen(8080, function() {

    console.log('uruchomiono');

});


const client = net.connect({port: 8080});

client.setEncoding('utf8');

client.on('data', function(data) {

    fs.appendFile('./data.txt', data + '\n');

    client.write('otrzymalem dane: ' + data);

});


client.on('close', function() {
    console.log('zakonczono polaczenie');
})