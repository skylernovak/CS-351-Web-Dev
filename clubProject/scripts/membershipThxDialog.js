function memberScripts() {
    let submitBtn = document.getElementById("submit-button");
    let closeBtn = document.getElementById("close-button");

    function closeModal() {
        let myModal = document.getElementById("ThanksDialog");
        myModal.classList.remove("ShowDialog");
    }

    function summarizeDat(elementName, elementValue) {
        let thxsDiag = document.querySelector("#ThanksDialog");
        let p = document.createElement("p");
        p.innerText = elementName + elementValue;
        thxsDiag.append(p);
    }

    function btnHandler() {
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
    }

    submitBtn.addEventListener('click', btnHandler);
    closeBtn.addEventListener('click', closeModal);
}

window.onload = memberScripts;