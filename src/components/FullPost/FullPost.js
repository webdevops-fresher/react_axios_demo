import React, { Component, PureComponent } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends PureComponent {
    

    constructor(props){
        super(props);
        this.state={
            loadedPost:null
        }
    }


    componentDidUpdate(){
        if(this.props.selectedPostId){
            if(!this.state.loadedPost || this.state.loadedPost.id!==this.props.selectedPostId){
                axios.get(`/${this.props.selectedPostId}`)
                .then(response=>{
                    this.setState({loadedPost:response.data});
                });
            }
        }
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.selectedPostId) post=<p>Loading...</p>
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <span>{this.state.loadedPost.author}</span>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;