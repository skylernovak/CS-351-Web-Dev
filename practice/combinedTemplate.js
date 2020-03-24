var express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

port = 5200; // Or anything you'd like
host = '127.10.24.60'; // Any loopback address

let myDate = new Date();
let thisDate = myDate.toLocaleDateString();
let thisTime = myDate.toLocaleTimeString();
let info = { date: thisDate, time: thisTime, name: "Skyler Novak", id: "ix9753" }

app.get('/', function (req, res) {
    res.render('base.njk', info);
});

app.listen(port, host, function () {
    console.log('Combined app listening on IPv4: ' + host + ':' + port);
});