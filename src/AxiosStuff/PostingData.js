import React, { Component } from 'react';
import axios from 'axios';

class PostingData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            title: '',
            provider: '',
            tag: []
        }
    }
    
    changeHanlder = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/article', this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const {content, title, provider, tag} = this.state;
        return (
            <div>
                <form onSubmit={ this.submitHandler }>
                    <div>Title : &nbsp;
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHanlder}
                            placeholder="Please enter title"></input>
                    </div>
                    <div>Content : &nbsp;
                        <input type="text"
                            name="content"
                            value={content}
                            onChange={this.changeHanlder}
                            placeholder="Please enter title"></input>
                    </div>
                    <div>Provider : &nbsp;
                        <input type="text"
                            name="provider"
                            value={provider}
                            onChange={this.changeHanlder}
                            placeholder="Please enter title"></input>
                    </div>
                    <div>Tag : &nbsp;
                        <input type="text"
                            name="tag"
                            value={tag}
                            onChange={this.changeHanlder}
                            placeholder="Please enter title"></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default PostingData;