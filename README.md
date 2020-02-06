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