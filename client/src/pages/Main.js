import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import CenterContainer from '../components/shared/CenterContainer';

const Main = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/post/one')
    .then(res => setContent(res.data.content))
  }, [])
  
  return (
    <CenterContainer>
      {content && <BoldH1>{content}</BoldH1>}
    </CenterContainer>
  )
};

const BoldH1 = styled.h1`
  font-family: 'Berkshire Swash', cursive;
  color: white;
  font-size: 2em;
  letter-spacing: 0.1em;
  color: white;
  background-color: purple;
  background-image: radial-gradient(circle at top right, #A6165E, #720B99 62.5%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 4em;
  }
  @media (min-width: 576px) {
    font-size: 3em;
  }
`

export default Main;