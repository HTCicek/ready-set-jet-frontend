import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import Splash from './Splash';

class Main extends PureComponent {
  // componentDidMount() {
  //   // Here we check for the users token so that we can render the correct splash
  //   const { auth, seenWelcome } = this.props
  //   if (auth) {
  //     // redirect to splash with user page
  //   } else if (!auth && seenWelcome) {
  //     // redirect to sign up page
  //   } else {
  //     // redirect Welcome page!
  //   }
  // }
  render() {
    return (
      <>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          component="main"
        >
          <Switch>
            <Route path="/SignUp" component={() => <h2>Hit SignUp</h2>} />
            <Route path="/SignIn" component={() => <h2>Hit SignIn</h2>} />
            <Route path="/Home" component={() => <h2>Hit Home</h2>} />
            <Route path="/" component={Splash} />
          </Switch>
        </Grid>
      </>
    );
  }
}

const msp = state => ({
  // auth: state.auth,
  // seenWelcome: state.seenWelcome
});

export default withRouter(connect(msp)(Main));
