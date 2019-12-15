import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Splash = props => {
  const { id } = props.user;

  return (
    <div>
      {id ? <h2>render continue page</h2> : <h2>render welcome page</h2>}
    </div>
  );
};

const msp = state => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(msp)(Splash));
