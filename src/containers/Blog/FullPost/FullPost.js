import React, { Component, PureComponent } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    

    constructor(props){
        super(props);
        this.state={
            loadedPost:null
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.loadedPost!=null){
            if(this.state.loadedPost.id!=nextProps.match.params.id){
                return true;
            }
            return false;
        }
        return true;
    }

    componentDidMount(){
        if(this.props.match.params.id){
            if(!this.state.loadedPost || this.state.loadedPost.id!==this.props.match.params.id){
                axios.get(`/${this.props.match.params.id}`)
                .then(response=>{
                    this.setState({loadedPost:response.data});
                });
            }
        }
    }

    componentDidUpdate(){
        axios.get(`/${this.props.match.params.id}`)
        .then(response=>{
            this.setState({loadedPost:response.data})
        })
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if(this.props.match.params.id) post=<p>Loading...</p>
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <span>{this.state.loadedPost.author}</span>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                        <button onClick={()=>{
                            this.props.history.goBack();
                        }}>Go Back</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;