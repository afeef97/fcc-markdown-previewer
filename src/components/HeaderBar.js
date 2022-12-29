import React from "react";
import "../styles/App.css";
import "../styles/Editor.css";
import "../styles/Previewer.css";
import "../styles/Guide.css";

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar" key={this.props.title}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}