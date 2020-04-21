const rp = require("request-promise-native");
const events = require('./eventData.json');
var request = require('request');

var options = {
    uri: 'http://127.9.19.28:4188/addActivities',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    method: "POST",
    json: true, // Automatically parses the JSON string in the response
    body: events
};

console.log("POST JSON test");
request(options, function(error, res, body) {
    console.log("error: " + error);
    console.log("body: " + body);
});

/*
rp(options)
    .then(function (event) {
        console.log(event);
    })
    .catch(function (err) {
        // call failed...
    });*/