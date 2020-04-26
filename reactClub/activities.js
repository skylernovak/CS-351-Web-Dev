/*import React from 'react';
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
  document.getElementById('root'));*/

  import React from "react";

  function Activities(props) {
    let tableRows = props.events.map(function(act, i) {
      return (
        <tr key={i}>
          <td>{act.Name}</td>
          <td>{act.Date}</td>
        </tr>
      );
    });
    return (
      <main>
        <header>
          <h1>Club Activities</h1>
        </header>
        <p>Season has been postponed because of COVID-19</p>
        <section id="Schedule">
          <table>
            <thead>
              <tr>
                <td>Event</td>
                <td>Dates</td>
              </tr>
            </thead>
            <tbody id="EventTable">{tableRows}</tbody>
          </table>
        </section>
      </main>
    );
  }

  export default Activities;  