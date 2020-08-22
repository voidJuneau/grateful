import React from 'react';
import styled from 'styled-components';

const Post = props => {
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

  return(
    <Box>
      <Info>
        <h3>{props.data.ownerName}</h3>
        <p>{props.data.date}</p>
      </Info>
      <Content>{props.data.content}</Content>
    </Box>
  );
}

export default Post;