import React from 'react';
import styled from 'styled-components';

const Card = props => {
  const Container = styled.div`
  border: 3px dotted salmon;
  border-radius: 10px;
  padding: 1em;
  margin: 0 auto;
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Card;