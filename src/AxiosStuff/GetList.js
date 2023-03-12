import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getList: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/article')
            .then(response => {
                console.log("response from then => ", response);
                this.setState({
                    getList : response.data
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    errorMessage: 'Error retrieving the data'
                })
            })
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.getList !== this.state.getList) {
            console.log("something Happened!!");
        }
    }
    
    render() {
        const { getList, errorMessage } = this.state;
        return (
            <div>
                <div>
                {
                    getList.length ?
                        getList.map(list => 
                            <div key={list.id}>
                                {list.title} {list.provider} {list.tag}
                            </div>
                        ) : null
                } 
               </div>
               { errorMessage  ? <div>{ errorMessage }</div> : null }
            </div>
        );
    }
}

export default PostList;