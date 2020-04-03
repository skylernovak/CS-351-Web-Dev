const express = require('express');
var app = express();
app.use(express.static('public'));
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
    res.render('index.njk');
});

app.get('/about', function(req, res){
    res.render('About.njk');
});

app.get('/activities', function(req, res){
    res.render('Activities.njk');
});

app.get('/login', function(req, res){
    res.render('Login.njk');
});

app.get('/membership', function(req, res){
    res.render('Membership.njk');
});

app.get('/teams', function(req, res){
    res.render('Teams.njk');
});

let host = '127.0.0.1';
let port = '7373';
app.listen(port, host, function () {
    console.log("clubServer via Templates listening on IPv4: " + host +
    ":" + port);
});