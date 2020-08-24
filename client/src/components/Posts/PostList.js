import React from 'react';

import Post from './Post';

const PostList = props => {
  return props.data.map(item => <Post data={item} key={item._id} />);
}

export default PostList;