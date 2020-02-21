# Homework #3 Solution
**Skyler Novak**

**NetID: ix9753**

# Question 1

## (a)

I included images on the following pages:
+ index.html
+ about.html

Here is a screenshot of the image on the homepage

![screenshot](clubProject/images/scrnsht-1.png)

## (b)

I added the following emoji's:
+ baseballs flanking the footer `&#x26be`
+ a trophy next to the league champion history `&#x1f3c6`

as seen here:
![screenshot 2](clubProject/images/scrnsht-2.png)

# Question 2

## (a)

![screenshot 3](clubProject/images/scrnsht-3.png)

## (b)

http://csweb01.csueastbay.edu/~ix9753/clubProject/index.html

# Question 3

## (a)

```javascript
document.title = "CS 351 - ix9753";
document.getElementById("Author").innerHTML = "Skyler Novak";
```

## (b)

```javascript
document.getElementById("Number").innerHTML = "The " + states.length + " States";
let initialValue = 0;
var total2 = states.reduce(function (accu, curr) {
    return accu + curr.population
}, initialValue);
document.getElementById("TotalPop").innerHTML = "Total U.S. population: " + total2;
```