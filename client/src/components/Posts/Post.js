import React from 'react';
import styled from 'styled-components';

const Post = props => {
  const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* border: 1px solid silver; */}
  @media (min-width: 768px) {    
    flex-direction: row;
  }
  `
  const Info = styled.div`
    margin: 1em;
    padding: 1em;
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
    margin: 1em;
    padding: 1em;
    align-items: center;
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