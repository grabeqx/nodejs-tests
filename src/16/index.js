const express  = require('express');
const app = express();
const hbs = require('express-handlebars');


app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res) {

    res.render('home', {
        title: 'strona głowna',
        content: 'to jest strona glowna'
    })

});

app.listen(8080, function() {

    console.log('uruchomiono');

});