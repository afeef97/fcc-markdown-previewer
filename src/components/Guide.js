import React from "react";
import HeaderBar from "./HeaderBar";
import "../styles/Guide.css"

export default class Guide extends React.Component {
    render() {
        return (
            <div className='guide-area'>
                <HeaderBar title="Markdown Guide"/>
            </div>  
        );
    }
}