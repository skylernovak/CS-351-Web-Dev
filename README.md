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


