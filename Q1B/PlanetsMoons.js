import React from 'react';

function PlanetsMoons(props) {

    function hasPlanet(planet) {
        if (planet.moons.length >= 1)
            return true;
        return false;
    }

    console.log(props);
    let planetsWithMoons = props.planets.filter(hasPlanet);
    console.log(planetsWithMoons.length); // 9
    planetsWithMoons.sort(function(a, b) {
        return b.moons.length-a.moons.length;
    })
    console.log(planetsWithMoons);
    let planets = planetsWithMoons.map(function(planet, i){
        return <Planets key={"p"+i} planet={planet}/>
    })

    function PMHeader() {
        let pmh = <h2>Planets with Moons</h2>;
        return <div>
            {pmh}
        </div>
    } // PMHeader()

    function Planets(props) {
        return <li>
            <p>{props.planet.name} has {props.planet.moons.length} moons.</p>
        </li>
    }

    return <section>
        <PMHeader/>
        {planets}
    </section>
}

export default PlanetsMoons;