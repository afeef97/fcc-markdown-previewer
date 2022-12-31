import React from "react";
import HeaderBar from "./HeaderBar";
import "../styles/Editor.css"

export default class Editor extends React.Component {
    render() {
        return (
            <div className="editor-container">
                <HeaderBar title="Editor"/>
                <div className="editor-area">
                    <textarea id="editor" onChange={this.props.onChange}>{this.props.input}</textarea>
                </div>
            </div>
        );
    }
}