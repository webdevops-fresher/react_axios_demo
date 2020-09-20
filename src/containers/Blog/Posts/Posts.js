import React from 'react';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import {Link,Route} from 'react-router-dom';
import axios from '../../../axios';
import './Posts.css';

class Posts extends React.PureComponent{
    state = {
        posts: [],
        selectedPostId:null,
        error:false
      };
      componentDidMount() {
        axios.get("/").then((response) => {
          let posts = [...response.data].slice(0, 5);
          posts = posts.map((post) => {
            return { ...post, author: "vignesh" };
          });
          this.setState({ posts: [...posts] });
        })
        .catch(err=>{
            if(err){
                this.setState({error:true});
            }
        });
      }

    
      postClicked=(id)=>{
          this.props.history.push(this.props.match.url+'/'+id);
      }
    render(){
        const posts = this.state.posts.map((post) => {
            return (
            <Post
              title={post.title}
              author={post.author}
              key={post.id}
              postClicked={()=>this.postClicked(post.id)}
            />
          )});
        return (
            <section className="Posts">
                {!this.state.error?posts:<span>Error fetching data from server</span>}
                <Route path={this.props.match.url+'/:id'} exact component={FullPost} />    
            </section>
        );
    }
}


export default Posts;
