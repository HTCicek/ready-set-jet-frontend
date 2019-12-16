import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Welcome from './Welcome';

const Splash = props => {
  // const { id } = props.user;

  return (
    <>
      {false ? <h2>render continue page</h2> : <Welcome />}
    </>
  );
};

const msp = state => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(msp)(Splash));
