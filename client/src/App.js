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
  const [_id, set_id] = useState();
  const [userid, setUserid] = useState();

  const login = useCallback((_id, userid) => {
    setLoggedIn(true);
    set_id(_id);
    setUserid(userid);
  }, []);
  const logout = useCallback(() => {
    setLoggedIn(false);
    set_id(null);
    setUserid(null);
  }, []);

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
      value={{isLoggedIn, _id, userid, login, logout}}
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
