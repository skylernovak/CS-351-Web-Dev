# Homework 6 Solution
**Skyler Novak**

**NetID: ix9753**

# Question 1

## (a)

We will use templates to help us generate HTML in the following three contexts:

+ Server Side HTML page rendering
+ Static Web Pages
+ Client Side HTML page rendering

## (b)

We used three different types of files in our page rendering. Below are the files, and why they are important to our website development process:

+ `base.njk`: This is a template files created with nunjucks template engine. This helps us automate the web page development process. Instead of writing all the HTML for each and every page, the template takes care of all the tedious work of writing consistent headers, footers, nav, etc, on each page. This also helps create a cohesive look amoungst all our web pages, and reduces the chance of an error or mistake on a page. 
+ `content/*.html`: All of the HTML files found in the content folder contain the code that will populate the <main> html element on each page we generate. This is where our javascript program will pull the data from. 
+ `runIt.js`: This is our JavaScript program that will generate all the HTML pages. When it is run, it will pull the content from each HTML file in the content folder, and use it along with the template to create a web page. 

## (c)

**Mustache**: A javascript templating engine that does not use logic. There is no if statments, it simply reads the HTML to be templated, but can read specific attributes of objects if desired. This seems like an interesting concept to the templating approach, but I believe logic would make templating simplier to implelemt. [mustache.github.io](https://mustache.github.io)

**Handlebar**: Built upon Mustache, this template engine makes extensive use of block helpers, allowing access to a section of the template with a different context. The user can also create custom helpers. This appears to be very popular and worth studying further. [handlebarsjs.com](http://handlebarsjs.com)

# Question 2

## (a)

Computer devices come with an ethernet identification from the manufacturer. On an ethernet connection, this identifier is used to communicate between devices. This identifier however, does not scale well when many devices are connected. So your internet service provider gives computer devices an IP address, and this can be used to communicate between computer devices across exponentially much larger networks. 

## (b)

In order to transfer a 200KB image with a 1500 byte limit, we must utilize packets. A packet is a small partial collection of data from the original 200KB image, say about 1400 bytes. The other 100 bytes would be used as a header for the packet, stating its source and destination, and position in the overall packet distribution order. These packets would have to be sent multiple times, until the destination acknolwdges is had recieved a particular packet. There are bound to be some packets that end up missing during transmission, so the source must take precautions to ensure the destination recieves all the delivered packets.  I think the transport layer should handle this functionality, since it is transporting all of these packets, it should be charged with keeping them in order and ensuring they arrive safely. 

## (c)

TCP provides better reliability of transport of byte streams over UCP. Using TCP, our machines can communicate with multiple other machines without worry of port collisions. TCP ensures all the data is present, and in the correct order. UDP is faster than TCP, but does not garentee all the data has been delivered. 

## (d)

TCP requires a source and destination port so that it can send the information, and then verify that the information has been recieved. If it did not include a source port, it would be fire and forget, with no regard for if the information it's transmitting is good and complete. 

# Question 3

## (a)

