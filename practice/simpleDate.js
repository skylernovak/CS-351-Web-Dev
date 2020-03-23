var express = require('express');
var app = express();

port = 1928; // Or anything you'd like
host = '127.19.28.41'; // Any loopback address

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/date', function (req, res) {
    let myDate = new Date();
    res.send('Date and Time: ' + myDate + '\nSkyler Novak');
});

app.listen(port, host, function () {
    console.log('Simple Date Server app listening on IPv4: ' + host + ':' + port);
});