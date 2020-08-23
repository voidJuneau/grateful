import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const NavSide = props => {
  const Aside = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    height: 100vh;
    width: 70%;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26 );
    @media (min-width: 768px) {
      display: none;
  `

  return ReactDOM.createPortal((
    props.show && <Aside onClick={props.onClick}>{props.children}</Aside>
  ), document.getElementById("side-hook"));
};

export default NavSide;
