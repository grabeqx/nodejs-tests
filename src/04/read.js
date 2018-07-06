const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.setPrompt('wpisz cos >>> ');

// rl.on('line', function(line) {

//     if(line === 'exit') {
//         return rl.close();
//     }

//     console.log(`wpisales ${line}\n`);

//     rl.prompt();
// })
// var prize = [0, 30, 50, 100, 5];

// rl.question('Wynierz sejf od 1 do 5\n', function(answer) {
//     console.log(`Wygrales ${prize[parseInt(answer) - 1]} PLN`);
//     rl.close();
// })

var percentage = 0;

function printPercentage() {

    if(percentage >= 100) {
        rl.write('\nZakończono\n');
        return rl.close();
    }

    percentage += 5;

    readline.clearLine(rl,0);
    readline.cursorTo(rl,0);
    rl.write(`Postęp ${percentage}%`);

    setTimeout(printPercentage, 200);
}

printPercentage();