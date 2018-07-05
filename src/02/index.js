// const Event = require('events');

// var emitter = new Event();

// emitter.setMaxListeners(0);

// emitter.on('message', function(msg) {
//     console.log('Wiadomość: ' + msg);
// });


// emitter.emit('message', 'hej');

const Puller = require('./puller');

var puller = new Puller('http://google.com');

function printData(data) {
    console.log(`Odczytae dane: ${data.data} z adresu ${data.url}`);
}

puller.on('data', printData);

puller.pull();

setTimeout(() => {
    puller.stop(printData);
}, 5000);