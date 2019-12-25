/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import { allLocations } from './adapters/backend';
import { setLocations } from './redux/actions';


import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Welcome from './routes/Welcome';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { setLocations } = this.props;

    allLocations().then(data => {
      // send data to store
      setLocations(data.airports);
    });
  }

  rootRouter = () => {
    const { loggedIn } = this.props;
    if (!!localStorage.token && loggedIn) {
      return <Redirect to="/home" />;
    } else if (!!localStorage.token) {
      return <Redirect to="/sign-in" />;
    } else if (!localStorage.token && !!localStorage.welcomeSeen) {
      return <Redirect to="/sign-up" />;
    } else {
      return <Redirect to="/welcome" />;
    }
  }

  render() {
    const { rootRouter } = this;
    return (
      <>
        <CssBaseline />
        <Container maxWidth="sm" component="main">
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="stretch"
          >
            <Switch>
              <Route path="/sign-up">
                {this.props.loggedIn ? <Redirect to="/sign-in" /> : <SignUp />}
              </Route>
              <Route path="/sign-in">
                <h1>Sign In</h1>
                <SignIn />
              </Route>
              <Route path="/home">
                <h1>Home</h1>
                <Home />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/">{rootRouter()}</Route>
            </Switch>
          </Grid>
        </Container>
      </>
    );
  }
}

const msp = state => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(msp, { setLocations })(App);

/*
  return (
    <Header />  // contains a button that pushes history back if not at splash
    <MainComp />// contains either the splash, form, or dashboard
    <Footer />  // contains button that will essentially 
                // redirect to a new form (addFLightForm, loginForm, signUpForm)
                // 
  )
*/
