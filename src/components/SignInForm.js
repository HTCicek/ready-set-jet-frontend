import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header, Grid } from 'semantic-ui-react';

import { authToken, setUser, changeEmail, changePass } from '../redux/actions';
import { logIn } from '../adapters/backend';
import { withRouter, Link } from 'react-router-dom';

const SignInForm = props => {
  const { email, password, setUser, changeEmail, changePass, history } = props;

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

  const handleSubmit = e => {
    e.preventDefault();

    logIn(email, password)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        if (data.user) {
          setUser(data.user);
          authToken(data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('loggedIn', true);
          history.push('/home');
        } else {
          console.error('failed to authenticate');
        }
      });
  };

  return (
    <>
      <Grid.Row>
        <Header textAlign="center" as="h2">
          Please Log In
        </Header>
      </Grid.Row>
      <Grid.Row>
        <Form onSubmit={handleSubmit}>
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
          <Button type="submit">Log In</Button>
        </Form>
      </Grid.Row>
      {errors[0] ? handleErrors() : null}
      <Grid.Row>
        <Link to="/welcome">New User?</Link>
      </Grid.Row>
    </>
  );
};

const msp = state => {
  return {
    email: state.userForm.email,
    password: state.userForm.password,
  };
};

export default withRouter(
  connect(msp, { setUser, changeEmail, changePass })(SignInForm),
);
