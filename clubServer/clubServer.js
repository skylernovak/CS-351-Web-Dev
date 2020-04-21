const express = require('express');
var app = express();
app.use(express.static('public'));
/*const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});*/

/*
// Global variable to hold new team registrations on membership page form submission
let newTeamRegs = [];
*/

// Bring in club event data file
const events = require('./eventData.json');
const members = require('./clubUsers.json');


// Express form method POST route handler
//let urlencodedParser = express.urlencoded({extended: true});
/*
app.get('/', function (req, res) {
    res.render('index.njk');
});

app.get('/about', function(req, res){
    res.render('About.njk');
});

*/

app.get('/activities', function(req, res){
    res.json(events);
});

app.post('/addActivity', express.json(), function(req, res) {
    console.log(`path /addActivity recieved: ${JSON.stringify(req.body)}`);
    events.push(req.body);
    res.json(events);
});

app.get('/members', function(req, res) {
    res.json(members);
});

/*
app.get('/login', function(req, res){
    res.render('Login.njk');
});

app.get('/membership', function(req, res){
    res.render('Membership.njk');
});

app.get("/newTeamReg", function(req, res){
    newTeamRegs.push(req.query);
    // console.log(`New Team Registars: ${JSON.stringify(newTeamRegs)}`);
    res.render("RegThanks.njk", req.query);
});

app.get('/teams', function(req, res){
    res.render('Teams.njk');
});

app.get('/addEvent', function(req, res){
    res.render('AddEvent.njk', {events: events});
});

app.post('/newEvent', express.urlencoded({extended: false}),
    function(req, res) {
        events.push({Name: req.body.eventName, Date: req.body.eventDate});
        res.render('Activities.njk', {events: events});
    })
*/

let host = '127.9.19.28';
let port = '4188';
app.listen(port, host, function () {
    console.log("clubServer via Templates listening on IPv4: " + host +
    ":" + port);
});