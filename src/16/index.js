const express  = require('express');
const app = express();
const hbs = require('express-handlebars');
const users = require('./users/users');


app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res) {

    res.render('home', {
        title: 'strona głowna',
        content: 'to jest strona glowna',
        users: users.list()
    })

});

app.listen(8080, function() {

    console.log('uruchomiono');

});