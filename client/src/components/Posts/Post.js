import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../utils/AuthContext";
import Button from "../shared/Button";

const Post = (props) => {
  const auth = useContext(AuthContext);
  const [content, setContent] = useState(props.data.content);
  const [isEdit, setEdit] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const editPost = () => {
    setEditedContent(props.data.content);
    setEdit(true);
  };

  const deletePost = () => {
    if (window.confirm("Sure to delete?")) {
      axios
        .delete("http://localhost:5000/api/post/" + props.data._id, {
          headers: {
          Authorization: 'Bearer ' + auth.token
        }})
        .then(() => window.location.reload(false))
        .catch(res => alert(res.response.data.error))
    }
  };
  const saveEdit = () => {
    axios
      .patch("http://localhost:5000/api/post/" + props.data._id, {
        content: editedContent
      }, {
        headers: {
        Authorization: 'Bearer ' + auth.token
      }})
      .then((res) => {
        props.data.content = editedContent;
        setContent(editedContent);
      }).catch(res => alert(res.response.data.error))
    setEdit(false);
  };

  return (
    <Box>
      <Info>
        <h3>{props.data.ownerName}</h3>
        <p>{props.data.date}</p>
        {auth._id === props.data.owner_id && (
          <React.Fragment>
            <i className="fa fa-pencil" onClick={editPost}></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-trash-o" onClick={deletePost}></i>
          </React.Fragment>
        )}
      </Info>
      {!isEdit && <Content>{content}</Content>}
      {isEdit && (
        <Content>
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <Button onClick={saveEdit}>Save</Button>
          <Button onClick={() => setEdit(false)}>Cancel</Button>
        </Content>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  ${"" /* border: 1px solid silver; */}
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 4em 0;
  }
`;
const Info = styled.div`
  margin: 0 1em;
  padding: 0 1em;
  ${"" /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end; */}
  @media (min-width: 768px) {
    min-width: 150px;
    ${"" /* flex-direction: column;  */}
    text-align: right;
  }
`;
const Content = styled.div`
  display: flex;
  margin: 0 1em;
  padding: 0.5em 1em;
  align-items: center;
  border-left: 2px dashed salmon;
`;
const Textarea = styled.textarea`
  width: 100%;
`;

export default Post;
