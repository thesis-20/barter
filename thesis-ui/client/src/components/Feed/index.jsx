import React, { Component } from 'react'
import Post from './post.jsx';
import PostList from './postlist.jsx';

class Feed extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        Hello from Feed
        <PostList />
        <Post />
      </div>
    )
  }
}

export default Feed