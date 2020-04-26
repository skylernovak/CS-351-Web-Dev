const express = require('express');
var app = express();
app.use(express.static('public'));


// Bring in club event data file
const events = require('./eventData.json');
const members = require('./clubUsers.json');



app.get('/activities', function(req, res){
    res.json(events);
});

/*
app.post('/addActivity', express.json(), function(req, res) {
    console.log(`path /addActivity recieved: ${JSON.stringify(req.body)}`);
    events.push(req.body);
    res.json(events);
});
*/

// added code
app.post("/activities", express.json(),
    function (req, res) {
        let activity = req.body;
        console.log(JSON.stringify(activity)); // for Debugging
        events.push(activity);
        res.json(events);
    }
);


app.get('/members', function(req, res) {
    res.json(members);
});


let host = '127.9.19.28';
let port = '4188';
app.listen(port, host, function () {
    console.log("clubServer via Templates listening on IPv4: " + host +
    ":" + port);
});