// process.stdout.write('Podaj wiadomosć \n');

// process.stdin.on('readable', function() {
//     var line = process.stdin.read();

//     if(line === null) {
//         return;
//     }

//     if(line.toString().trim() === 'close') {
//         return process.exit();
//     }
    
//     console.log(line);
//     process.stdout.write('Wpisałes: ' + line + '\n');

// });

// console.log('program wykonuje kod.');

// process.once('beforeExit', function() {
//     setTimeout(function() {
//         console.log("test");
//     }, 1000)
// });

// console.log('exit');

// console.log(process.argv.slice(1));

// setTimeout(function() {
//     console.log("test");
// }, 6000)

// process.once('SIGINT', function() {
//     console.log('nacisnij ctrl + c');
// })

