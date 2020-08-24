import React from 'react';

import PostList from '../components/Posts/PostList';

const Posts = props => {
  const POSTS = [{
    _id: 3415125,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ownerName: 'user0',
    date: Date().toString().substring(0, 15)
  }, {
    _id: 34431,
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ownerName: 'user1',
    date: Date().toString().substring(0, 15)
  }]
  return <PostList data={POSTS}/>;
}

export default Posts;