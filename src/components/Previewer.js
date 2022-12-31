import React from "react";
import HeaderBar from "./HeaderBar";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "../styles/Previewer.css"

marked.setOptions({
    renderer: new marked.Renderer(),
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartypants: false,
    xhtml: false
})

export default class Previewer extends React.Component {
    getMarkdownText() {
        let rawMarkup = DOMPurify.sanitize(marked.parse(this.props.input));
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div className="preview-container" style={this.props.isExpand ? {width: '80%'} : null}>
                <HeaderBar title="Markdown Preview" isExpand = {this.props.isExpand} expandHandler={this.props.expandHandler}/>
                <div className='preview-area'>
                    <div className="markdown" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
                </div>
            </div>
        );
    }
}