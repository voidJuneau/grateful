import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { AuthContext } from '../../utils/AuthContext';
import Button from '../shared/Button';

const Post = props => {
  const auth = useContext(AuthContext);
  const [isEdit, setEdit] = useState(false);
  const [editedContent, setContent] = useState('');
  const editPost = () => {
    setContent(props.data.content);
    setEdit(true);
  }
  const deletePost = () => {
    if (window.confirm("Sure to delete?")) {
      axios.delete('http://localhost:5000/api/post/' + props.data._id)
      .then(res => console.log(res))
    }
  }
  const saveEdit = () => {
    console.log(editedContent);
    props.data.content = editedContent;
    axios.patch('http://localhost:5000/api/post/' + props.data._id, {content: editedContent})
    .then(res => console.log(res))
    setEdit(false);
  }

  return(
    <Box>
      <Info>
        <h3>{props.data.ownerName}</h3>
        <p>{props.data.date}</p>
        {auth._id === props.data.owner_id &&
        <React.Fragment>
          <i className='fa fa-pencil' onClick={editPost}></i>
          <i className='fa fa-trash-o' onClick={deletePost}></i>
        </React.Fragment>}
      </Info>
        {!isEdit &&
      <Content>
      {props.data.content}
      </Content>}
        {isEdit && (
          <Content>
          <Textarea value={editedContent} onChange={e=>setContent(e.target.value)}/>
          <Button onClick={saveEdit}>Save</Button>
          <Button onClick={()=>setEdit(false)}>Cancel</Button>
          </Content>
        )}
    </Box>
  );
}

const Box = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2em;
${'' /* border: 1px solid silver; */}
@media (min-width: 768px) {    
  flex-direction: row;
  margin: 4em 0;
}
`
const Info = styled.div`
  margin: 0 1em;
  padding: 0 1em;
  ${'' /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end; */}
@media (min-width: 768px) {   
  min-width: 150px;
  ${'' /* flex-direction: column;  */}
  text-align: right;
}
`
const Content = styled.div`
  display: flex;
  margin: 0 1em;
  padding: 0.5em 1em;
  align-items: center;
  border-left: 2px dashed salmon;
`
const Textarea = styled.textarea`
  width: 100%;
`

export default Post;