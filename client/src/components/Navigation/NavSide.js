import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
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

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <Aside onClick={props.onClick}>{props.children}</Aside>
    </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.getElementById("side-hook"));
};

export default NavSide;
