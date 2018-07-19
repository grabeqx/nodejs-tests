const express  = require('express');
const app = express();

app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', function(req, res) {

    res.send('hello word');

});

app.get('/o-nas', function(req, res) {

    res.send('No nas');

});

app.get('/blog/:date/:id', function(req, res) {

    res.send(`
        wpis o ${req.params.id} utworzony ${req.params.date}
        <pre>${JSON.stringify(req.query, null, 4)}</pre>
    `);

})

app.listen(8080, function() {

    console.log('uruchomiono');

});