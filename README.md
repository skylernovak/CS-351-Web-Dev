# Homework 8 Solution
**Skyler Novak**

**NetID: ix9753**

# Question 1

## (a)

Directories created with copies of assets added

## (b)

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        {% block title %}
            <!-- <title>Golden State Fantasy Baseball Homepage</title> -->
        {% endblock %}
        <link href="./styles/club.css" type="text/css" rel="stylesheet">
    </head>
    <body>
    <header>
        {% block pageHeader %}
            <!-- <h1 class="pageHeader">Golden State Fantasy Baseball</h1> -->
        {% endblock %}
    </header>
    <nav>
        <div class="dropdown">
            <span>Menu</span>
            <div class="dropdown-content">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/activities">Activities</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/membership">Membership</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        {% block main %}
            <!-- Main HTML content page -->
        {% endblock %}
    </main>
    <footer>
        &#x26be &copy 2020 Skyler Novak &#x26be
    </footer>
    </body>
</html>
```

## (c)

```Javascript
{% extends "base.njk" %}

{% block title %}
<title>About - GSFB</title>
{% endblock %}

{% block pageHeader %}
<h1 class="pageHeader">About</h1>
{% endblock %}
    
{% block main %}
<h1 id="first-pitch">First Pitch</h1>
<p>In 2014, five friends and their love for baseball started it all. Based on the ESPN Fantasy platform.</p>

<P>All die-hard San Francisco Giants fans!</P>

<p>Forest, Skyler, Cameron, Frankie, and Ging</p>

<div class="" style="max-width: 100%;max-height: 100%;display: inline-block;">

<p><img src="images/GSFB-2.jpg" alt="Core Four"></p>
<p><img src="images/GSFB-3.jpg" alt="2016 All-Star Game"></p>
</div>

<p>This page is part of an ongoing project in my Website Development course at California State University, East Bay.</p>
{% endblock %}
```

## (d)

```Javascript
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

let host = '127.9.19.28';
let port = '4188';
app.listen(port, host, function () {
    console.log("clubServer via Templates listening on IPv4: " + host +
    ":" + port);
});
```

## (e)

![screenshot 1](images/scrnsht-1.png)

# Question 2

## (a)

![screenshot 2](images/scrnsht-2.png)

## (b)

![screenshot 3](images/scrnsht-3.png)

## (c)

![screenshot 4](images/scrnsht-4.png)

# Question 3

## (a)

```Javascript
// Bring in club event data file
const events = require('./eventData.json');

app.get('/activities', function(req, res){
    res.render('Activities.njk', {events: events});
});
```

## (b)

```Javascript
{% extends "base.njk" %}

{% block title %}
<title>Activities - GSFB</title>
{% endblock %}

{% block pageHeader %}
<h1 class="pageHeader">Activities</h1>
{% endblock %}

{% block main %}
<section id="Events">
    <h2 id="gsfb-events">GSFB Events</h2>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Date</td>
            </tr>
        </thead>
        <tbody>
            {%for event in events %}
                <tr><td>{{event.Name}}</td><td>{{event.Date}}</td></tr>
            {% endfor %}
        </tbody>
    </table>
</section>
{% endblock %}
```

# Question 4

## (a)

![screenshot 5](images/scrnsht-5.png)

## (b)

