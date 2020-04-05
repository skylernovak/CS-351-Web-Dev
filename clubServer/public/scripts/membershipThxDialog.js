function memberScripts() {
    let submitBtn = document.getElementById("submit-button");

    function closeModal() {
        let myModal = document.getElementById("ThanksDialog");
        // i think i need to get rid of ThanksDialog id, not ShowDialog class
        myModal.classList.remove("ShowDialog");
        myModal.style.display = 'none';
    }

    function summarizeDat(elementName, elementValue) {
        //let thxsDiag = document.querySelector("#ThanksDialog");
        let modalDialog = document.querySelector(".ShowDialog");
        let p = document.createElement("p");
        if (elementName != "") {
            p.innerText = elementName + elementValue;
            //thxsDiag.append(p);
            modalDialog.append(p);
        }
        else {
            elementValue.setAttribute("value", "close");
            //thxsDiag.append(elementValue);
            modalDialog.append(elementValue);
            console.log(elementValue);
        }
    }

    function btnHandler() {
        let myElement = document.getElementById("ThanksDialog");
        //let myDiv = document.createElement("div");
        //myDiv.classList.add("ShowDialog");
        //myElement.appendChild(myDiv);
        //myElement.classList.add("ShowDialog");

        myElement.style.display = 'block';

        let secHead = document.createElement("h2");
        secHead.innerHTML = "<strong>Thanks for applying!</strong>";

        let owner_name = document.getElementById("ownerName").value;
        summarizeDat("Name: ", owner_name);
        let owner_email = document.getElementById("ownerEmail").value;
        summarizeDat("Email: ", owner_email);
        let owner_tel = document.getElementById("ownerTel").value;
        summarizeDat("Phone: ", owner_tel);
        let exp_select = document.getElementById("ownerExp");
        let owner_exp = exp_select.options[exp_select.selectedIndex].text;
        summarizeDat("Experience: ", owner_exp);
        let owner_comments = document.getElementById("ownerCom").value;
        summarizeDat("Comments: ", owner_comments);

        let clsBtn = document.createElement("input");
        clsBtn.setAttribute("type", "button");
        clsBtn.setAttribute("id", "close-button");
        summarizeDat("", clsBtn)
        clsBtn.addEventListener('click', closeModal);
    }

    submitBtn.addEventListener('click', btnHandler);
}

window.onload = memberScripts;