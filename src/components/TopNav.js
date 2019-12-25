import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const TopNav = props => {
  const { compToDisp, history } = props;

  const { title, button, settings } = compToDisp;

  const backButton = () => {
    return (
      <IconButton
        edge="start"
        color="primary"
        aria-label="menu"
        onClick={() => history.goBack()}
      >
        <ArrowBackIosIcon fontSize="small" />
        <Typography variant="subtitle1">Back</Typography>
      </IconButton>
    );
  };

  const settingsButton = () => {
    return (
      <IconButton edge="end" color="primary" aria-label="menu">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    );
  };

  const titleType = string => {
    return (
      <Typography variant="h6" color="primary">
        {string}
      </Typography>
    );
  };

  return (
    <header>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          {button ? backButton() : null}

          {title ? titleType(title) : null}

          {settings ? settingsButton() : null}
        </Toolbar>
      </AppBar>
      <Divider />
    </header>
  );
};

export default withRouter(TopNav);
