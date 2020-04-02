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
        {% block metaStuff %}
            <title>Golden State Fantasy Baseball Homepage</title>
        {% endblock %}
        <link href="./styles/club.css" type="text/css" rel="stylesheet">
    </head>
    <body>
    <header>
        {% block pageHeader %}
            <h1 class="pageHeader">Golden State Fantasy Baseball</h1>
        {% endblock %}
    </header>
    <nav>
        <div class="dropdown">
            <span>Menu</span>
            <div class="dropdown-content">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="Activities.html">Activities</a></li>
                    <li><a href="Teams.html">Teams</a></li>
                    <li><a href="Membership.html">Membership</a></li>
                    <li><a href="Login.html">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main>
        {% block main %}{% endblock %}
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

{% block metaStuff %}
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