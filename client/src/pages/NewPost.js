import React, { useState } from 'react';
import styled from 'styled-components';

import CenterContainer from '../components/shared/CenterContainer';
import Card from '../components/shared/Card'
import Button from '../components/shared/Button';

const NewPost = () => {
  const [content, setContent] = useState('');

  const savePost = event => {
    event.preventDefault();
    console.log(content)
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