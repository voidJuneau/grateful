import React from 'react';
import styled from 'styled-components';

const Input = props => {
  const Label = styled.label`
  width: 100%;
  float: left;
  text-align: left;
  `

  const Ainput = styled.input`
  ${'' /* width: 100%; */}
  float: left;
  margin-bottom: 1em;
  `

  return <React.Fragment>
    <Label>{props.label}</Label>
    <Ainput type={props.type} required={props.required} placeholder={props.placeholder}/>
  </React.Fragment>
};

export default Input;