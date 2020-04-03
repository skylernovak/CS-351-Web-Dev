function eventsTable() {
    let tbody = document.querySelector("#Events table tbody");

    events.forEach(function(events) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${events.Name}</td><td>${events.Date}</td>`;
        tbody.appendChild(tr);
    })
}

// assign eventsTable to onload when window has finished loading
// this will load the JS code when the html has finished
// !!! IMPORTANT --> ORDER MATTERS !!!
window.onload = eventsTable;