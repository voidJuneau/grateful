import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavSide from './NavSide';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';
import Backdrop from './Backdrop';

const Navication = props => {
  const HambergerButton = styled.button`
    width: 2.5em;
    height: 3em;
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 2em;
    curser: pointer;
    @media (min-width: 768px) {
      display: none;
    }
  `
  const StripeSpan = styled.span`
    width: 2.5em;
    height: 2px;
    background: white;
  `
  const Title = styled.h1`
    font-family: 'Berkshire Swash', cursive;
    color: white;
    text-decoration: none;
  `
  const SideNav = styled.nav`
    height: 100%
  `
  const HeaderNav = styled.nav`
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  `

  const [sideIsOpen, setSideIsOpen] = useState(false);
  const openSide = () => setSideIsOpen(true);
  const closeSide = () => setSideIsOpen(false);
  
  return (
    <React.Fragment>
      {sideIsOpen && <Backdrop onClick={closeSide} />}
      <NavSide show={sideIsOpen} onClick={closeSide}>
        <SideNav>
          <NavLinks />
        </SideNav>
      </NavSide>

      <NavHeader>
        <HambergerButton onClick={openSide}>
          <StripeSpan/><StripeSpan/><StripeSpan/>
        </HambergerButton>
        <Link to="/" style={{textDecoration: 'none'}}><Title>Greatful</Title></Link>
        <HeaderNav>
          <NavLinks />
        </HeaderNav>
      </NavHeader>
    </React.Fragment>
  )
}

export default Navication;