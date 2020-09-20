import React, { Component } from "react";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
import Home from "../../components/Home/Home";

import "./Blog.css";

import axios from "axios";
import { Route, Link, NavLink, withRouter, Switch } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/posts" exact>
                  posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts/> */}
        <Switch>   
          <Route path="/" exact component={Home} />
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts"  component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
