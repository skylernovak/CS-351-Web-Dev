# Homework #4 Solution
**Skyler Novak**

**NetID: ix9753**

# Question 1

## (a)

 Login page created with email and password fields, and a button to submit info

 ## (b)

```javascript
let loginbtn = document.getElementById("login-button");

function btnHandler() {
    let user_email = document.getElementById("username").value;
    let user_pword = document.getElementById("password-field").value;
    console.log("Email: " + user_email);
    console.log("Password: " + user_pword);
}

loginbtn.addEventListener('click', btnHandler);
```

![screen shot 1](clubProject/images/scrnsht-1.png)

# Question 2

## (a)

```javascript
events = [
    {
        "Name": "Online Snake Draft",
        "Date": "Sunday, March 22nd"
    },
    {
        "Name": "All-Star Game",
        "Date": "July 14th"
    },
    {
        "Name": "Trade Deadline",
        "Date": "August 25th"
    }
]
```

## (b)

![screenshot 2](clubProject/images/scrnsht-2.png)

```javascript
function eventsTable() {
    let tbody = document.querySelector("#Events table tbody");

    events.forEach(function(events) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${events.Name}</td><td>${events.Date}</td>`;
        tbody.appendChild(tr);
    })
}

window.onload = eventsTable;
```

# Question 3

## (a)

```html
<h1>New Membership Application</h1>
<p>Please enter the following info. As soon as a team 
    becomes available, we will contact you. 
</p>
<p>Full Name: <input type="text" id="ownerName" name="ownerName" placeholder="Babe Ruth"></p>
<p>Email: <input type="email" id="ownerEmail" name="ownerEmail" placeholder="babe@ruth.com"></p>
<p>Phone: <input type="tel" id="ownerTel" name="ownerTel" placeholder="510-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></p>
<p>Experience: <select class="expDropdown">
    <option value="">No. of Years</option>
    <option value="0">Never</option>
    <option value="1">1 year</option>
    <option value="1">2-3 years</option>
    <option value="1">4+ years</option>
    </select></p>
<p>Comments: <textarea cols="30" rows="8"
    placeholder="Questions/Comments/etc.">
    </textarea></p>
<input type="button" id="submit-button" value="Submit">  
```

## (b)

