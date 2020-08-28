import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../../utils/AuthContext';

const NavLinks = props => {
  const auth = useContext(AuthContext);
  return (
    <NavUl>
      {auth.isLoggedIn && <Li>
        <NavLinkA to="/new">New</NavLinkA>
      </Li>}
      <Li>
        <NavLinkA to="/all">Everyone</NavLinkA>
      </Li>
      {auth.isLoggedIn && <Li>
        <NavLinkA to="/me">Profile</NavLinkA>
      </Li>}
      {!auth.isLoggedIn && <Li>
        <NavLinkA to="/join">Start</NavLinkA>
      </Li>}
    </NavUl>
  );
}

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Li = styled.li`
  margin: 1em;
  @media (min-width: 768px) {
    margin: 0 0.5em
  }
`
const NavLinkA = styled(NavLink)`
  font-family: 'Montserrat', Verdana, sans-serif;
  font-weight: 600;
  color: #A6165E;
  text-decoration: none;
  padding: 0.5em;
  @media (min-width: 768px) {
    color: white;
  }
`

export default NavLinks;