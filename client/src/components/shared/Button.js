import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const Abutton = styled.button`
  
  `

  return (<Abutton
  type={props.type}
  onClick={props.onClick}
  >
    {props.children}
  </Abutton>);
}

export default Button;