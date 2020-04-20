const rp = require("request-promise-native");
const events = require('./eventData.json');

var options = {
    uri: 'http://127.9.19.28:4188/activities',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (event) {
        console.log(event);
    })
    .catch(function (err) {
        // call failed...
    });