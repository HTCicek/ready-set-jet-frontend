import React from 'react';
import { withRouter } from 'react-router-dom';

const NavComp = props => {
  const { history } = props;
  return (
    <nav>
      <button type="button">Back</button>
      <h4>Ready Set Jet</h4>
    </nav>
  );
};

export default withRouter(NavComp);
