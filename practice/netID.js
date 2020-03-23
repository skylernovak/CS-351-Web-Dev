var express = require('express');
var app = express();

port = 9753; // Or anything you'd like
host = '127.19.23.45'; // Any loopback address

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/netID', function (req, res) {
    let name = "Skyler Novak";
    let id = "ix9753";
    res.send('Name: ' + name + ', Net ID: ' + id);
});

app.listen(port, host, function () {
    console.log('Net ID app listening on IPv4: ' + host + ':' + port);
});