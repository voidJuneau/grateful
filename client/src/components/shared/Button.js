import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const Abutton = styled.button`
    padding: 1em;
    margin: 0.5em auto;
    border-radius: 5px;
    border: 1px solid salmon;
    background-color: white;
    font-size: 1em;
  `

  return (<Abutton
  type={props.type}
  onClick={props.onClick}
  >
    {props.children}
  </Abutton>);
}

export default Button;