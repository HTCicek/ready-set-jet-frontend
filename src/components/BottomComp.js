import React from 'react';
import { withRouter } from 'react-router-dom';

const BottomComp = props => {
  const { match, history } = props
  return <div>{/* match route to display stuff */}</div>;
};

export default withRouter(BottomComp);
