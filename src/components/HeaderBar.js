import React from "react";
import "../styles/HeaderBar.css";

export default class HeaderBar extends React.Component {
    headerContent() {
        if(this.props.title === "Editor") { 
            return (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <i className="fa-solid fa-pen"></i>
                    <p className="title">{this.props.title}</p>
                    <button className="button"><i className="fa-solid fa-eraser button-icon"></i></button>
                </div>
            );
        }

        else if(this.props.title === "Markdown Preview") {
            return (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p className="title">{this.props.title}</p>
                    <button onClick={this.props.expandHandler} className="button">
                        {
                            this.props.isExpand 
                            ? <i className="fa-solid fa-down-left-and-up-right-to-center button-icon"></i>
                            : <i className="fa-solid fa-up-right-and-down-left-from-center button-icon"></i>
                        }
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="header-bar" key={this.props.title}>
                <div className="header-content"> 
                    {this.headerContent()} 
                </div>
            </div>
        );
    }
}