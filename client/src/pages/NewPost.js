import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { AuthContext } from '../utils/AuthContext';
import CenterContainer from '../components/shared/CenterContainer';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const NewPost = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [content, setContent] = useState('');

  const savePost = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/post/new', {
      content,
      owner: auth._id
    }, {
      headers: {
      Authorization: 'Bearer ' + auth.token
    }}).then(res=>{
      console.log(res.data);
      history.push('./me');
    }).catch(res => alert(res.response.data.errors.content.message))
  }

  return (
    <CenterContainer>
      <Card>
        <h2>New Post</h2>
        <hr />
        <form onSubmit={savePost}>
          {/* <Button>Having hard time on start?</Button> */}
          <TextArea rows='5' value={content} onChange={e => setContent(e.target.value)}></TextArea>
          <Button type='submit'>Save</Button>
        </form>
      </Card>
    </CenterContainer>
  );
}

const TextArea = styled.textarea`
  width: 100%;
`

export default NewPost;