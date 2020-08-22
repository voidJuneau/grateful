import React from "react";
import styled from 'styled-components';

const Main = () => {
  const POST = {
    content:
      "It's grate that there are somebody don't give up on me even when I wanna give up myself.",
    writer: "Me",
    date: Date.now(),
  };
  const CenterDiv = styled.div`
    display: flex;
    justify-context: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    margin-top: 3em;
    ${'' /* background-color: purple; */}
    ${'' /* background-image: linear-gradient(135deg, #A6165E, #720B99); */}
    ${'' /* background-image: radial-gradient(circle at top right, #A6165E, #720B99 62.5%); */}
  `
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
      font-size: 3em;
    }
  `
  
  return (
    <CenterDiv>
      <BoldH1>{POST.content}</BoldH1>
    </CenterDiv>
  )
};

export default Main;