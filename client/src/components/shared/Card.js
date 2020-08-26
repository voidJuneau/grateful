import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: 3px dotted salmon;
border-radius: 10px;
padding: 1em;
margin: 0 auto;
`

const Card = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Card;