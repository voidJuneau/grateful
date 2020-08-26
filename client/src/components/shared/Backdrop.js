import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = props => {
  const Back = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 7;
  `
  
  return ReactDOM.createPortal(
    <Back onClick={props.onClick} />,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
