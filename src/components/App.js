import React from "react";
import "../styles/App.css";
import Editor from "./Editor";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      textInput: ''
    };
    
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(event) {
    this.setState({
      textInput: event.target.value
    });
  }
  
  render() {
    return (
      <div className="app">
        <Editor input={this.state.textInput} onChange = {this.handleTextInput}/>
      
      </div>
    );
  }
}
