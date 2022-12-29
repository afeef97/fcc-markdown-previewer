import React from "react";
import "../styles/Editor.css"

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar">
                <p>{this.props.title}</p>
            </div>
        );
    }
}