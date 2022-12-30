import React from "react";
import "../styles/HeaderBar.css";

export default class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header-bar" key={this.props.title}>
                <p>
                    {
                        this.props.title == "Editor" 
                            ? <i className="fa-solid fa-pen"></i>
                            : this.props.title == "Markdown Preview"
                            ? <i className="fa-solid fa-magnifying-glass"></i>
                            : null
                    } <span>{this.props.title}</span>
                </p>
            </div>
        );
    }
}