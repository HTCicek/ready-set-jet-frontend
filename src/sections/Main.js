import React from 'react';
import { Grid } from 'semantic-ui-react';

const Main = props => {
  const { compToDisp } = props;

  return (
    <Grid.Row as="main" style={{ height: '90vh', maxWidth: '1024px' }}>
      <Grid padded centered column={1} container verticalAlign="middle">
        {compToDisp}
      </Grid>
    </Grid.Row>
  );
};

export default Main;
