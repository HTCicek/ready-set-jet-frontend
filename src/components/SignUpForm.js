import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header, Grid } from 'semantic-ui-react';

import {
  authToken,
  setUser,
  changeEmail,
  changePass,
  changePassConf,
  setUserFormStep,
} from '../redux/actions';
import { newUser } from '../adapters/backend';
import { Link, withRouter } from 'react-router-dom';

const SignUpForm = props => {
  const {
    email,
    password,
    password_confirmation,
    changePassConf,
    setUser,
    changeEmail,
    changePass,
    setUserFormStep,
    setStepState,
  } = props;

  const errors = [];

  const handleErrors = () => {
    return (
      <Grid.Row>
        <ul>
          {errors.map(error => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </Grid.Row>
    );
  };

  const handleUserSubmit = e => {
    e.preventDefault();

    const userObj = { email, password, password_confirmation };

    newUser(userObj)
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          const { user, token } = data;

          authToken(token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('loggedIn', true);

          setUser(user);
          setUserFormStep('username');
          setStepState('username');
        } else {
          console.error(data.errors);
        }
      });
  };
  
  return (
    <>
      <Grid.Row>
        <Header as="h2" textAlign="center">
          Sign Up!
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Form onSubmit={handleUserSubmit}>
          <Form.Input
            placeholder="Email Address"
            icon="mail"
            type="text"
            name="email"
            value={email}
            onChange={e => changeEmail(e.target.value)}
          />
          <Form.Input
            placeholder="Password"
            icon="lock"
            type="password"
            name="password"
            value={password}
            onChange={e => changePass(e.target.value)}
          />
          <Form.Input
            placeholder="Confirm Password"
            icon="lock"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={e => changePassConf(e.target.value)}
          />
          <Button type="submit">Sign Up!</Button>
        </Form>
      </Grid.Row>
      {errors[0] ? handleErrors() : null}
      <Grid.Row>
        <Link to="/sign-in">Already have an account?</Link>
      </Grid.Row>
    </>
  );

};

const msp = state => ({
  email: state.userForm.email,
  password: state.userForm.password,
  password_confirmation: state.userForm.password_confirmation,
});

export default withRouter(
  connect(msp, {
    setUser,
    changeEmail,
    changePass,
    changePassConf,
    setUserFormStep,
  })(SignUpForm),
);
