import React from 'react';
import coreFour from "./images/GSFB-1.jpg";

function HomeHeader() {

    let headerSec = <header>
        <h1 className="pageHeader">Golden State Fantasy Baseball</h1>
        </header>;

    return <div>
        {headerSec}
    </div>;

} // HomeHeader() component

function HomeMain() {

    let welcomeHeader = <h1 id="welcome-to-the-golden-state-fantasy-baseball-homepage">Welcome to the Golden State Fantasy Baseball homepage!</h1>;
    let introP = <p>10 team, Head-to-Head points league</p>;
    let firstImg = <img src={coreFour}/>;
    
    return <div>
        {welcomeHeader}
        {introP}
        {firstImg}
    </div> 
} // HomeMain() component

function LeagueHistory() {
    
    let histHeader = <h2 id="league-history-x1f3c6">League History &amp;#x1f3c6</h2>;
    let history = <ul>
        <li><p>2019 - Appian Assault, Forest Novak</p></li>
        <li><p>2018 - SF Crusaders, Tom Oneto</p></li>
        <li><p>2017 - Bixby Kings, Skyler Novak</p></li>
        <li><p>2016 - Chico PEDs, Alex Ging</p></li>
        <li><p>2015 - Bay Area BALLerz, Cameron Ball</p></li>
        <li><p>2014 - Fresno Foul-Ballers, Forest Novak</p></li>
    </ul>

    return <div>
        {histHeader}
        {history}
    </div>
} // LeagueHistory() component

function Home() {

    return <div>
        <HomeHeader/>
        <HomeMain/>
        <LeagueHistory/>
    </div>;

} // Home() component

export default Home;

/*

    <nav>
        <div class="dropdown">
    <span>Menu</span>
    <div class="dropdown-content">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="Activities.html">Activities</a></li>
            <li><a href="Teams.html">Teams</a></li>
            <li><a href="Membership.html">Membership</a></li>
            <li><a href="Login.html">Login</a></li>
        </ul>
    </div>
</div>
    </nav>
    
    <main>
        <h1 id="welcome-to-the-golden-state-fantasy-baseball-homepage">Welcome to the Golden State Fantasy Baseball homepage!</h1>
<p>10 team, Head-to-Head points league</p>

<p><img src="images/GSFB-1.jpg" alt="Core Four Mets Game"></p>

<h2 id="league-history-x1f3c6">League History &amp;#x1f3c6</h2>
<ul>
<li><p>2019 - Appian Assault, Forest Novak</p>
</li>
<li><p>2018 - SF Crusaders, Tom Oneto</p>
</li>
<li><p>2017 - Bixby Kings, Skyler Novak</p>
</li>
<li><p>2016 - Chico PEDs, Alex Ging</p>
</li>
<li><p>2015 - Bay Area BALLerz, Cameron Ball</p>
</li>
<li><p>2014 - Fresno Foul-Ballers, Forest Novak</p>
</li>
</ul>
<div>

<h2 id= 
</ol>
</div>

<p>Since 2014</p>
    </main>
    <footer>
        &#x26be &copy 2020 Skyler Novak &#x26be
    </footer>

*/