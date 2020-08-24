import React, { useState, useCallback } from 'react';
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
import Navigation from './components/Navigation/Navigation'
import { AuthContext } from './utils/AuthContext';

const App = () => {  
  const Container = styled.div`
    margin: 5em auto 0 auto;
    max-width: 768px;
  `
  
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => setLoggedIn(true), []);
  const logout = useCallback(() => setLoggedIn(false), []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <switch>
        
      </switch>
    );
  } else {
    routes = (
      <switch>

      </switch>
    );
  }
  
  return (
    <AuthContext.Provider
      value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}
    >
      <Router>
        <Navigation />
        <Container>
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

            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
