import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const NavComp = props => {
  const { location, history } = props;

  const backButton = () => {
    return (
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => history.goBack()}
      >
        <ArrowBackIosIcon fontSize="small" />
        <Typography variant="subtitle1">Back</Typography>
      </IconButton>
    );
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        {location.pathname !== '/' ? backButton() : null}
        <Typography variant="h6">Ready Set Jet</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(NavComp);
