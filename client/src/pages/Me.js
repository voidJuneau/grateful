import React, { useContext } from 'react';

import PostList from '../components/Posts/PostList';
import { AuthContext } from '../utils/AuthContext';

const Me = () => {
  const auth = useContext(AuthContext);

  return <div>
    {/* <PostList /> */}
  </div>
}

export default Me;