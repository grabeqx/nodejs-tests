const mongoose = require("mongoose");
const validUrl = require('valid-url');
const randomstring = require('randomstring');

const DB_USER = "grabeq";
const DB_PASSWORD = "testowy1";
const WEBSITE_URL = "http://localhost:8080/";

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@ds237192.mlab.com:37192/nodedb`, { useNewUrlParser: true });


var schema = new mongoose.Schema({
    short: String,
    url: String
});

var URL = mongoose.model("URL", schema);


function validateUrl(url) {
    return validUrl.isUri(url);
}

function shorten(value, cb) {

    if(!validateUrl(value)) {
        return cb(new Error('Url is not valid'));
    }

    URL.findOne({url: value}).exec(function(err, url){
        
        if(err) {
            return cb(err)
        }
        if(!url) {

            var short = randomstring.generate(5);
            var newURL = new URL({
                url: value,
                short: short
            });

            newURL.save(function(err, url) {
                if(err) {
                    return cb(err);
                }

                cb(null, WEBSITE_URL + url.short);

            })

        } else {
            cb(null, WEBSITE_URL + url.short);
        }


    })

}


function find(short, cb) {

    URL.findOne({short: short}).exec(function(err, url) {

        if(!url || err) {
            return cb(new Error('URL not fount=d'));
        }

        cb(null, url.url);

    });

}

module.exports = {
    shorten: shorten,
    find: find
};