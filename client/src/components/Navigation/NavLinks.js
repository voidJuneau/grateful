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
        <NavLinkA to={`/user/${auth.userid}`}>My moments</NavLinkA>
      </Li>}
      {!auth.isLoggedIn && <Li>
        <NavLinkA to="/join">Start</NavLinkA>
      </Li>}
      {auth.isLoggedIn && <li>
        <NavLinkA to="/all" onClick={auth.logout}>Log out</NavLinkA>
      </li>}
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
  font-family: 'Impact', Verdana, sans-serif;
  font-size: 1.3em;
  font-weight: 200;
  color: #A6165E;
  text-decoration: none;
  padding: 0.5em;
  @media (min-width: 768px) {
    color: white;
  }
  &:hover {
    color: lightpink;
  }
`

export default NavLinks;