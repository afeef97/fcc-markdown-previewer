import React from "react";
import "../styles/App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      textInput: '',
      expandPreview: false
    };
    
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleErase = this.handleErase.bind(this);
  }

  handleTextInput(event) {
    this.setState({
      textInput: event.target.value
    });
  }

  handleExpand() {
    this.setState({
      expandPreview: !this.state.expandPreview
    })
  }

  handleErase() {
    this.setState({
      textInput: ''
    })
  }
  
  render() {
    return (
      <div className="app">
        {
          this.state.expandPreview 
          ? null 
          : <Editor input={this.state.textInput} onChange = {this.handleTextInput} eraseHandler = {this.handleErase}/>
        }       
        <Previewer input={this.state.textInput} isExpand = {this.state.expandPreview} expandHandler = {this.handleExpand}/> 
      </div>
    );
  }
}
