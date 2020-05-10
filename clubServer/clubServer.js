const express = require('express');
var app = express();
const membersHashed = require('./clubUsersHash.json');
const bcrypt = require('bcryptjs');
app.use(express.static('public'));

// Bring in club event data file
const events = require('./eventData.json');
const members = require('./clubUsers.json');

app.get('/activities', function(req, res){
    res.json(events);
});

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

app.post('/login', express.json(), function (req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    // find user
    let authUser = membersHashed.find(function (user) {
        return user.email === email;
    });
    if (!authUser) { // user not found
        res.status(401).json({
            error: true,
            message: "User/Password error"
        })
        return;
    } // if(!authUser)
    let verified = bcrypt.compareSync(password, authUser.password);
    if (verified) {
        let newUserInfo = Object.assign({}, authUser);
        delete newUserInfo.password
        res.json(newUserInfo);
    }
    else {
        res.status(401).json({
            error: true,
            message: "User/Passwprd error"
        })
    } // else
})

let host = '127.9.19.28';
let port = '4188';
app.listen(port, host, function () {
    console.log("clubServer via Templates listening on IPv4: " + host +
    ":" + port);
});