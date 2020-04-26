/*const rp = require("request-promise-native");
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
    });
*/

/* Testing the POST /actlivities API */
const rp = require("request-promise-native");
const verbose = true;

let initialGet = {
    uri: 'http://127.9.19.28:4188/activities',
    json: true,
    method: "GET"
};

let firstPost = {
    uri: 'http://127.9.19.28:4188/activities',
    json: true,
    method: "POST",
    body: { Name: "Season Reboot", Date: "Whenever the ball's thrown" }
};

function printActivities(data) {
    console.log(`Currently ${data.length} activities`);
    if (!verbose) {
        return;
    }
    data.forEach(function(activity, i) {
        console.log(
            `Activity ${i + 1} name ${activity.Name}, date: ${activity.Date}`
        );
    });
}

async function runTests() {
    console.log("Initial Get of activities");
    let res = await rp(initialGet);
    printActivities(res);
    res = await rp(firstPost);
    console.log("After First Good Activity Post")
    printActivities(res);
}

runTests();