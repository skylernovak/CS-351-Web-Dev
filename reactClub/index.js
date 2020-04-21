import React from "react";
import ReactDOM from "react-dom";
import Activities from "./activities";
import eventsFile from "./eventData.json";

function Hello(props) { // A function component
    return <h1> Hello React from Skyler Novak (ix9753)! </h1>;
}

let events = eventsFile.map(function(clubEvent, i){
    return <ClubEvent key={clubEvent.Name + i} />
})

// Uses the function component
ReactDOM.render(
    <div><Hello/>
    <Activities events={events}/>
    </div>,
    document.getElementById("root")
);