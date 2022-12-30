import React from "react";
import "../styles/HeaderBar.css";

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar" key={this.props.title}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}