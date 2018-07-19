const express  = require('express');
const app = express();

app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', function(req, res) {

    res.send('hello word');

});

app.listen(8080, function() {

    console.log('uruchomiono');

});