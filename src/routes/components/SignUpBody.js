import React from 'react';
import { TextField, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  authToken,
  changeEmail,
  changePass,
  changePassConf,
  changeUsername,
  setUser,
} from '../../redux/actions';

import { newUser } from '../../adapters/backend';

const SignUpBody = props => {
  const { changeEmail, changePass, changePassConf, changeUsername } = props;

  const submitHandler = e => {
    e.preventDefault();

    newUser(props.userForm)
      .then(res => res.json())
      .then(data => {
        const user = data.user.user;
        authToken(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('loggedIn', true);

        props.setUser(user);
        return data;
      })
      .then(data => {
        if (data.errors) {
          // message I suppose
        } else {
          // e.target.reset()
          // redirect to enxt form
        }
      });
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign Up!
      </Typography>
      <form onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
              onChange={e => changeUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email Address"
              name="email"
              onChange={e => changeEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={e => changePass(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password_confirmation"
              label="Password Confirmation"
              type="password"
              onChange={e => changePassConf(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/sign-in">I have an account</Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

const msp = state => {
  return {
    userForm: state.userForm,
  };
};

export default connect(msp, {
  authToken,
  changeEmail,
  changePass,
  changePassConf,
  changeUsername,
  setUser,
})(SignUpBody);
