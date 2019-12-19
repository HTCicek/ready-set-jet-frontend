import React from 'react';
import { Grid } from '@material-ui/core';

const MainBody = props => {
  const { compToDisp } = props

  return (
    <>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
        component="section"
      >
        {compToDisp}
      </Grid>
    </>
  );
};

export default MainBody;
