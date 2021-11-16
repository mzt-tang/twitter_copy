import React, { useState, useEffect } from "react";

import Post from "./Post";

const Posts = props => {
  const [posts, setPosts] = useState([]);

  // Fetchs the posts
  useEffect(() => {
    const url = "/api/v1/posts/index.json";
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }})
      .then(response => {
        setPosts((current) => [...current, ...response]);
      })
    }, [])

    return (
      <div>
        <h1>Posts</h1>
        <ul>{posts.map((post) => <li key={post.id}><Post post={post}/></li>)}</ul>
      </div>
    );
  };

export default Posts;