import React from 'react';

function PlanetsNoMoons(props) {
    
    function hasNoPlanet(planet) {
        if (planet.moons.length == 0)
            return true;
        return false;
    }

    let planetsWOMoons = props.planets.filter(hasNoPlanet);
    console.log(planetsWOMoons);
    let pWoMoonsH = <h2>Planets without Moons ({planetsWOMoons.length})</h2>

    let planets = planetsWOMoons.map(function(planet, i){
        return <Planets key={"p"+i} planet={planet}/>
    })

    function Planets(props) {
        return <li>
            <p>{props.planet.name}</p>
        </li>
    }
    
    return <section className="NoMoons">
        {pWoMoonsH}
        {planets}
    </section>
}

export default PlanetsNoMoons;