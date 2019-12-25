import React from 'react';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BottomNav = props => {
  const { compToDisp, history, location } = props;

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
    <>
      <BottomNavigation style={{ backgroundColor: 'inherit' }}>{whichButtonsDoWeDisplay()}</BottomNavigation>
    </>
  );
};

export default withRouter(BottomNav);
