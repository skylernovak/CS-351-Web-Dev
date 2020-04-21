import React from 'react';
import ReactDOM from 'react-dom';
import events from './eventData.json';

const intro = <h1>GSFB Events</h1>;
// Take a look at what we imported
console.log(events);
// Extremely common pattern mapping array of info to array of JSX
let rows = events.map(function(e, i){
  return <tr key={e.Name + i}><td>{e.Name}</td><td>{e.Date}</td></tr>;
});

let eventTable = <table className="myTable">
  <thead><tr><th>Name</th><th>Date</th></tr></thead>
  <tbody>{rows}</tbody>
</table>;

ReactDOM.render(<section>{intro}{eventTable}</section>,
  document.getElementById('root'));