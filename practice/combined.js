var express = require('express');
var app = express();

port = 5100; // Or anything you'd like
host = '127.6.25.91'; // Any loopback address

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/combined', function (req, res) {
    let myDate = new Date();
    let name = "Skyler Novak";
    let id = "ix9753";
    res.send('Date and Time: ' + myDate + '\n' + 'Name: ' + name + ', Net ID: ' + id);
});

app.listen(port, host, function () {
    console.log('Combined app listening on IPv4: ' + host + ':' + port);
});