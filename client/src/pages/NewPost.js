import React from 'react';

import CenterContainer from '../components/shared/CenterContainer';
import Card from '../components/shared/Card'
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';

const NewPost = () => {
  return (
    <CenterContainer>
      <Card>
        <h2>New Post</h2>
        <hr />
        <form>
          <Button>Having hard time on start?</Button>
          <textarea></textarea>
          <Button type='submit'>Save</Button>
        </form>
      </Card>
    </CenterContainer>
  );
}

export default NewPost;