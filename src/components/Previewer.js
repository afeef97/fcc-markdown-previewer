import React from 'react';
import HeaderBar from './HeaderBar';
import { marked } from 'marked';
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
    render() {
        return (
            <div className='preview-area'>
                <HeaderBar title="Markdown Preview"/>
                <p>{marked.parse(this.props.input)}</p>
            </div>
        );
    }
}