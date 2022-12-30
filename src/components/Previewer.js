import React from 'react';
import HeaderBar from './HeaderBar';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
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
            <div className='preview-area'>
                <HeaderBar title="Markdown Preview"/>
                <div className="markdown" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
            </div>
        );
    }
}