
const express  = require('express');
const app = express();
const hbs = require('express-handlebars');
const users = require('./users/users');
const bodyParser = require('body-parser');
const api = require('./api/api');

app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use("/api", api);

app.get('/', function(req, res) {

    users.list(function(err, users) {

        res.render('home', {
            title: 'strona głowna',
            content: 'to jest strona glowna',
            users: err ? [] : users
        })

    });

});


app.get('/user/:id', function(req, res) {

    users.get(req.params.id, function(err, data) {

        if(err) {
            req.status(404).send(err.message);
        } else {
            res.render('user', data);
        }

    });

});

app.listen(8080, function() {

    console.log('uruchomiono');

});