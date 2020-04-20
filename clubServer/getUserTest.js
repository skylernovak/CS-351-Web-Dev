const rp = require("request-promise-native");
const events = require('./clubUsers.json');

var options = {
    uri: 'http://127.9.19.28:4188/members',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (members) {
        console.log("Member Interface, there are " + members.length + " members.");
    })
    .catch(function (err) {
        // call failed...
    });