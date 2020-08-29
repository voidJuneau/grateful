import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from 'styled-components';

import Main from './pages/Main'
import NewPost from './pages/NewPost'
import Posts from './pages/Posts'
import Join from './pages/Join'
import Me from './pages/Me'
import Navigation from './components/Navigation/Navigation'
import { AuthContext } from './utils/AuthContext';

const App = () => {  
  
  const [token, setToken] = useState(false);
  const [_id, set_id] = useState();
  const [userid, setUserid] = useState();

  const login = useCallback((_id, userid, token, expire) => {
    setToken(token);
    set_id(_id);
    setUserid(userid);
    const exp = expire || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem('user', JSON.stringify({_id, userid, token, exp}));
  }, []);

  const logout = useCallback(() => {
    setToken(false);
    set_id(null);
    setUserid(null);
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('user'));
    if (stored && stored.token && new Date(stored.exp).getTime() > new Date().getTime()) {
      login(stored._id, stored.userid, stored.token, new Date(stored.exp))
    }
  }, [login])

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/new">
          <NewPost />
        </Route>
        <Route path="/all">
          <Posts />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/all">
          <Posts />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  
  return (
    <AuthContext.Provider
      value={{isLoggedIn:!!token, _id, userid, token, login, logout}}
    >
      <Router>
        <Navigation />
        <Container>
          {routes}
        </Container>
      </Router>
    </AuthContext.Provider>
  )
}

const Container = styled.div`
margin: 5em auto 0 auto;
max-width: 768px;
`

export default App;
