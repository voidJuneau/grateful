import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <NavHeader />
      <Container>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/join">

          </Route>
          <Route path="/login">

          </Route>
          <Route path="/posts">

          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  )
}

export default App;
