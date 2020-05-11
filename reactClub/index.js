import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Activities from "./activities";
import events from "./eventData.json";

function Hello(props) { // A function component
    return <h1> Hello React from {props.name}! </h1>;
}

// Uses the function component
ReactDOM.render(
    <div>
        <Home/>
    </div>,
    document.getElementById('root')
);

/*
ReactDOM.render(
    <div>
        <Hello name = "Skyler Novak (ix9753)"/>
        <Activities events={events} />
    </div>,
    document.getElementById('root')
);

*/