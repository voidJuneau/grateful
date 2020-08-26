import React from 'react';
import styled from 'styled-components';

const Input = props => {

  return <React.Fragment>
    <Label>{props.label}</Label>
    <Ainput 
      type={props.type} 
      required={props.required} 
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      key={props.label}
      id={props.label}
    />
  </React.Fragment>
};

const Label = styled.label`
width: 100%;
float: left;
text-align: left;
`

const Ainput = styled.input`
width: 100%;
float: left;
margin-bottom: 1em;
`

export default Input;