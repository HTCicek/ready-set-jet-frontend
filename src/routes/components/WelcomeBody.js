import React from 'react';
import { Typography, Grid, Avatar, Paper } from '@material-ui/core';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const WelcomeBody = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Avatar variant="square" alt="welcome image" sizes="large">
          <NightsStayIcon fontSize="large" />
        </Avatar>
        <Typography variant="h6">Ready Set Jet</Typography>
        <Typography variant="subtitle1">Jet-Lag Defeater</Typography>
      </Grid>
      <Paper>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography variant="body1" paragraph>
            Welcome
          </Typography>
          <Typography variant="body2" align="center" paragraph>
            Creating your curated sleep <br />
            schedule to acclimate to your <br />
            destination's timezone
          </Typography>
        </Grid>
      </Paper>
    </>
  );
};

export default WelcomeBody;
