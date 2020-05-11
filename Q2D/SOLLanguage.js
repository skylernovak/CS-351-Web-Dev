import React from 'react';

class Language extends React.Component {
    constructor(props) {
      super(props); // Must call
      this.state = {
          name: "", info: ""
      };
    } // constructor

    textAreachange(event){
        this.setState({info: event.currentTarget.value});
    }
  
    inputChange(event){
        this.setState({name: event.currentTarget.value});
    }

    addLang() {
        console.log(this.state);
    }

    render() {
        let formTitle = <h2>Language Form</h2>;
        let contents = <div id="LanguageForm">
            <label htmlFor="langName">Name: </label>
            <input id="langName" value={this.state.name} onChange={this.inputChange.bind(this)}/>
            <label htmlFor="langInfo">Tell us about the language: </label>
            <textarea id="langInfo" value={this.state.info} onChange={this.textAreachange.bind(this)}/>
            <button type="submit" onClick={this.addLang.bind(this)}>Send Language</button>
        </div>;

      return <div>
          {formTitle}
          {contents}
      </div>;

    } // return()
  
} // Language class component
  
  
  export default Language;