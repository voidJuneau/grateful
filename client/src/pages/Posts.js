import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PostList from '../components/Posts/PostList';

const Posts = props => {
  const [posts, setPosts] = useState();

  useEffect(() => {axios.get(process.env.REACT_APP_BACKEND_URL + '/api/post/all')
  .then(res => setPosts(res.data))
  }, [])
  if (!posts) {
    return <div>Loading . . .</div>
  } else {
    return <PostList data={posts}/>
  }
}

export default Posts;