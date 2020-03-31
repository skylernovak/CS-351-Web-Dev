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

