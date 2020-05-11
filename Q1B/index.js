import React from 'react';
import ReactDOM from 'react-dom';
import planets from './planets.json';
import PlanetsMoon from './PlanetsMoons';
import PlanetsNoMoon from './PlanetsNoMoons';

let contents = <div><h1>The Solar System</h1>
        <PlanetsMoon planets={planets} />
        <PlanetsNoMoon planets={planets} />
    </div>;

ReactDOM.render(
  contents,
  document.getElementById('root')
);
