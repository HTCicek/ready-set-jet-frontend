import React from 'react';

import { connect } from 'react-redux';
import { Grid, Icon, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import { setUser, authToken, changePass, logOut } from '../redux/actions';

const SignInSignedIn = props => {
  const { username, email, history, logOut } = props;

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    logOut();
  };

  const linkToLog = () => {
    return (
      <Link to="/welcome" onClick={logoutHandler}>
        {`\n`}Choose another account
      </Link>
    );
  };
  return (
    <>
      <Grid.Row>
        {/* Avatar */}
        <Icon name="user circle" size="massive" />
        {/* Username */}
      </Grid.Row>
      <Grid.Row>
        <p as="h4">{`${username || email}`}</p>
      </Grid.Row>
      <Grid.Row>
        {/* Button -- Continue as ${username} || ${email}  */}
        <Button onClick={() => history.push('/home')}>
          Continue as {`${username || email}`}
        </Button>
      </Grid.Row>
      <Grid.Row>
        {/* Link to Choose another account */}
        {linkToLog()}
      </Grid.Row>
    </>
  );
};

const msp = state => {
  return {
    username: state.user.username,
    email: state.user.email,
  };
};

export default withRouter(connect(msp, { setUser, authToken, changePass, logOut })(SignInSignedIn));
