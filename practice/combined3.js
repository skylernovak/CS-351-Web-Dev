var express = require('express');
var app = express();

port = 1123; // Or anything you'd like
host = '127.11.23.58'; // Any loopback address

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/date', function (req, res) {
    let myDate = new Date();
    res.send('Date and Time: ' + myDate + '\nSkyler Novak');
});

app.get('/netID', function (req, res) {
    let name = "Skyler Novak";
    let id = "ix9753";
    res.send('Name: ' + name + ', Net ID: ' + id);
});

app.listen(port, host, function () {
    console.log('Combined app listening on IPv4: ' + host + ':' + port);
});

let testDate = new Date();

console.log(testDate.toLocaleDateString());
console.log(testDate.toLocaleTimeString());