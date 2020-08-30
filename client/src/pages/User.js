import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PostList from '../components/Posts/PostList';
import { AuthContext } from '../utils/AuthContext';

const User = props => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState();
  const [posts, setPosts] = useState();

  const { userid } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/api/user/' + userid)
    .then(res => {
      setPosts(res.data.posts)
      setUser(res.data.user)
    })
    
  }, [])
  
  let postList;
  if (!posts) {
    postList = <div>Loading . . .</div>
  } else {
    postList = <PostList data={posts}/>
  }

  return (
    <React.Fragment>
      {user && <div>
        <h2>{user.name}</h2>
        <h3>@{user.userid}</h3>
        <h4>Total of {posts.length} posts.</h4>
      </div> }
      {postList}
    </React.Fragment>
  )
}

export default User;