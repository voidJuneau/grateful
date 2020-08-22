import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Main from './pages/Main'
import Navigation from './components/Navigation/Navigation'
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      {/* <Container> */}
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/new">

          </Route>
          <Route path="/all">

          </Route>
          <Route path="/me">

          </Route>
          <Route path="/auth">

          </Route>
          <Redirect to="/" />
        </Switch>
      {/* </Container> */}
    </Router>
  )
}

export default App;
