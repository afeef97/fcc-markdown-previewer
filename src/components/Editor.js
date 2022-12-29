import React from "react";
import HeaderBar from "./HeaderBar";

export default class Editor extends React.Component {
    render() {
        return (
            <div className="editor-area">
                <HeaderBar title="Editor"/>
                <textarea id="editor" onChange={this.props.onChange}></textarea>
            </div>
        );
    }
}