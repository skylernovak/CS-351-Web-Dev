import React from 'react';
import ReactDOM from 'react-dom';
import Language from './SOLLanguage';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: []
        };
    }

    /* You are allowed to add methods STARTING HERE */
    // couldn't get this to work properly...
    addLang(lang) {
        this.setState({applications: this.state.applications.concat(lang)});
    }

    /* END AREA OF ADDED METHODS */

    render() {
        let lastLanguage = {};
        let numLanguages = this.state.applications.length;
        if (numLanguages > 0) {
            lastLanguage = this.state.applications[numLanguages-1];
        }
        return <div id="MainDiv"> 
            <h1> Favorite Programming Languages</h1> 
            <Language 
                /* CAN ADD CODE HERE */
                addLang={this.addLang.bind(this)}   // couldn't get this to work properly either...
                />
            <div>
                <h2>Polling History</h2>
                <p>Number of responses: {this.state.applications.length}</p>
                <h3>Most Recent Language</h3>
                <p>Name: {lastLanguage.name}</p>
                <p>Info: {lastLanguage.info}</p>
            </div>
            
            </div>;
    }
}


ReactDOM.render( < App / > , document.getElementById('root'));
