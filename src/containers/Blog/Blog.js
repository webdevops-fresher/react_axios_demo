import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";

class Blog extends Component {
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
      this.setState({selectedPostId:id});
  }

  render() {
    const posts = this.state.posts.map((post) => (
      <Post
        title={post.title}
        author={post.author}
        key={post.id}
        postClicked={()=>this.postClicked(post.id)}
      />
    ));

    return (
      <div>
        <section className="Posts">{!this.state.error?posts:<span>Error fetching data from server</span>}</section>
        <section>
          <FullPost selectedPostId={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
