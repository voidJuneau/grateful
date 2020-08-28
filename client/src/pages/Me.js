import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import PostList from '../components/Posts/PostList';
import { AuthContext } from '../utils/AuthContext';

const Me = () => {
  const auth = useContext(AuthContext);
  const [posts, setPosts] = useState();

  useEffect(() => {axios.get('http://localhost:5000/api/post/user/' + auth._id)
  .then(res => setPosts(res.data))
  }, [])
  let postList;
  if (!posts) {
    postList = <div>Loading . . .</div>
  } else {
    postList = <PostList data={posts}/>
  }

  return (
    <React.Fragment>
      {/* <h3>{auth.userid}</h3> */}
      {postList}
    </React.Fragment>
  )
}

export default Me;