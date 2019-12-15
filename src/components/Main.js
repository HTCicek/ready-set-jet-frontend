import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route to="/SignUp" />
        <Route to="/SignIn" />
        <Route to="/Home" />
        <Route to="/" />
      </Switch>
    </main>
  );
};

const msp = state => (
  {
    auth: state.auth
  }
)

export default withRouter(connect(msp)(Main));
