import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const Welcome = () => {
  return (
    <>
      <h1>Ready Set Jet</h1>
      <h2>Jet Lag Defeater</h2>
      <h3>Welcome</h3>
      <h4>flavor</h4>
      <Link component={<RouterLink />} to="/SignIn">
        or
        <br />
        Sign In
      </Link>
    </>
  );
};

export default Welcome;
