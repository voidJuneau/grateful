import React from 'react';
import styled from 'styled-components';

const NavHeader = props => {
  const Header = styled.header`
    display: flex;
    justify-context: center;
    align-items: center;
    background-color: #720B99;
    padding: 1em;
    font-family: 'Berkshire Swash', cursive;
    color: white;
    width: 100%;
    height: 2em;
    position: fixed;
    top: 0;
    z-index: 5;
    @media (min-width: 768px) {
      justify-content: space-between;
    }
  `
  
  return (
    <Header>
    {props.children}
    </Header>
  )
}

export default NavHeader;