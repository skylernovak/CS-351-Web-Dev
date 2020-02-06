# Homework #2 Solution
**Skyler Novak**
**NetID: ix9753**

# Question 1

## (a)

```
<nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
  <a class="navbar-brand d-none d-md-block" href="#">
    <img alt="Grotto Networking" src="/images/sideLogo.png" style="width: 150px">
  </a>
</nav>
```

The following lists show the different HTML tags and attributes used in the above example

### Tags
+ `<nav></nav>`
+ `<a></a>`
+ `<img>`

### Attributes
+ `class`
+ `href`
+ `alt`
+ `src`
+ `style`

## (b)

Can you use the same id attribute on more than one element in an HTML document? 
No, you can not do that. It must be unique to a single element.

Does the fact that we use id attributes as targets for links within a page influence this? 
Yes. the id attribute is meant to be unique to avoid confusion when targeting it.

Can you use the same class on multiple elements in a document? 
Yes, you can. If you want to target a singular element, an id is appropriate. If you want to target a few elements, a class is more suitable. 

Why or why wouldn’t this be helpful for styling?
Using headers as an example, for the 2nd h3 in each section, you may want to distinguish it from other h3's, so you would make a class
and then are able to target those specific h3's. If there was a singular h3 near the top of the document you want to further distinguish
by changing the style further, you can give that h3 an id and target it specifically from the other h3 headers.

## (c)

```
body {
  padding-bottom: 50px;
}

#RelatedItems {
  max-height: 50vh;
  overflow-y: auto;
}

.graphDrawing {
  border: dashed thin #808080;
  border-radius: 5px;
  width: 90%;
  margin: 0;
  margin-bottom: 25px;
}
```

### Selector & Type

`body` is a simple type selector

`#RelatedItems` is a simple id selector

`.graphDrawing` is a simple class selector

### Property & Value

`padding-bottom` is a property with the value of `50px`

`max-height` is a property with the value of `50vh`

`overflow-y` is a property with the value of `auto`

`border` is a property with the value of `dashed thin #808080`

`border-radius` is a property with the value of `5px`

`width` is a property with the value of `90%`

`margin` is a property with the value of `0`

`margin-bottom` is a property with the value of `25px`

## (d)

```
article figcaption {
  font-size: 18px;
  text-align: center;
}

a.navbar-brand img {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: white;
  margin-right: 10px;
  padding: 3px;
  border-right-color: #D4D4D4;
  border-right-style: solid;
  border-right-width: 1px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
```

`article figcaption` and `a.navbar-brand img` are both descendant cominator selectors. any element that belongs to both an article and figcaption
will be set to font size 18 pixels, and aligned in the center. For any element that is an anchor of class navbar-brand and is an image with have the 
property values listed assigned to it. 

# Question 2

## (b)

According to the HTML5 specification should you: 
(i) Put site wide navigation into the <main> element? 
(ii) Should you put common banners (e.g., site logo) in the <main> element? 
(iii) Should you put copyright notices in the <main> element?

The answer to all three above questions is no. The main element is designed for the main content of the body element that makes the page unique. 
site wide navigation is better suited at the top or to the side of the page. As well as banners. These are usually found in the header element. Cpyright notices are typically found in the footer element. 

List the file names of your pages here.
+ index.html
+ about.html
+ activities.html

## (c)

The header element should be located inside the body element, but should preceed the main element. The header element is used as an introductory section to the page while the main element will hold most of the content unique to that page. 

## (d)

*Is it okay to put the <footer> in <main>?* No it is not. It should be included in the body after main.

*What about as the last item in the <body>?* Yes, it is usually found as the last element in the body.

*Would you prefer one over the other? Why?* I would prefer to use it as the last element in body, as footer is usually designed to hold copyright information, and other links and info not typically needed on a daily basis. 

## (e)

![directory screenshot](clubProject/Images/hw2-1.png)

## (f)

```
<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="utf-8">
        <title>Activities - GSFB</title>
    </head>
    <body>
        <header>
            <h1>Activities</h1>
        </header>
        <nav>
            <ul>
                <li class="active"><a href="index.html">Home</a></li>
                <li class="active"><a href="About.html">About</a></li class="active">
                <li class="active"><a href="Activities.html">Activities</a></li class="active">
            </ul>
        </nav>
        <main>
            <h1>2020 Draft</h1>
            <p>The 2020 season online snake draft is tentativly set for Sunday, March 22nd, at Noon PST</p>
        </main>
        <footer>
            &copy 2020 Skyler Novak
        </footer>
    </body>
</html>
```

# Question 3

## (a)

![directory screenshot](clubProject/images/hw2-2.png)

1. parseInt('hello'); // (i) Why? and What is a NaN?

   NaN means Not-a-Number. This is returned from parseInt when the value sent to it does not contain an int

2. parseInt('12hello'); // (ii)

   This returns the number 12, which is the first two int characters of the string.

3. parseInt('1010', 2);  // (iii) What does this do?

   This returns the decimal value of '1010' using radix 2. Binary to Decimal. the value is 10.

4. parseInt('hi5'); // (iii) Is this the same as (ii)

   This returns NaN because the first two characters of the string are not a numerical character, or '0x', in which case it would be interpretted as hex.

5. parseFloat('3.145YourNameHere');

   this returns the value 3.145, the floating point number at the start of the string

5. parseFloat('YourNameHere2112'); // Put in your name!

   This returns NaN. I presume for similar reasons that parseInt returns NaN when the first two characters do not conform to specifications. 
