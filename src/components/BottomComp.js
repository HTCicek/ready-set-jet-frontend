import React from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BottomComp = props => {
  const { location, history } = props;

  const whichButtonsDoWeDisplay = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <BottomNavigationAction icon={<AddCircleIcon fontSize="large" />} />
        );
      case '/':
        return (
          <BottomNavigationAction
            icon={<NavigateNextIcon />}
            fontSize="large"
          />
        );
      default:
        return null;
    }
  };

  return (
    <footer>
      <BottomNavigation style={{ 'background-color': 'inherit' }}>{whichButtonsDoWeDisplay()}</BottomNavigation>
    </footer>
  );
};

export default withRouter(BottomComp);
