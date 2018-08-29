const mongoose = require('mongoose');

const db_user = 'grabeq';
const db_pass = 'testowy1';
 
mongoose.connect(`mongodb://${db_user}:${db_pass}@ds237192.mlab.com:37192/nodedb`, { useNewUrlParser: true });

const schema = new mongoose.Schema({
    name: String,
    lastName: String
});

var User = mongoose.model('User', schema);

function addUser(userData, cb) {

    var user = new User(userData);

    user.save(function(err, user) {
        if(err) {
            cb(err);
        } else {
            cb(null, user);
        }
    })

}

function getUser(id, cb) {

    User.findById(id).exec(function(err, user) {
        if(err) {
            cb(err);
        } else {
            cb(null, user);
        }
    })

}

function updateUser(userData, cb) {

    var id = userData.id;

    delete userData.id;

    User.findByIdAndUpdate(id, userData).exec(function(err, user) {
        if(err) {
            cb(err);
        } else {
            cb(null, user);
        }
    })

}

function deleteUser(id, cb) {

    User.findByIdAndRemove(id).exec(function(err, user) {
        if(err) {
            cb(err);
        } else {
            cb(null, user);
        }
    })

}

function listUsers(cb) {

    User.find({}).exec(function(err, users) {
        if(err) {
            cb(err);
        } else {
            cb(null, users);
        }
    })

}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser,
    list: listUsers
};