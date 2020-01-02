import React from 'react';

import {
  Placeholder,
  Header,
  Grid,
  Segment,
  Container,
  Button,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const Welcome = props => {
  const { history } = props;

  return (
    <>
      <Grid.Row style={{ marginTop: '2.5em' }}>
        <Placeholder>
          <Placeholder.Image square style={{ height: '10em', width: '10em' }} />
        </Placeholder>
      </Grid.Row>
      <Grid.Row>
        <Header as="h1">Ready Set Jet</Header>
      </Grid.Row>
      <Grid.Row>
        <Header as="h2">Jet-Lag Defeater</Header>
      </Grid.Row>
      <Grid.Row>
        <Segment compact padded>
          <Container text>
            <Header as="h2">Welcome</Header>
            <p>
              Creating your curated sleep schedule to acclimate to your
              destination's timezone
            </p>
            <Button onClick={() => history.push('/sign-up')} fluid>
              Get Started
            </Button>
            <Link to="/sign-in">{`\n`}skip to login</Link>
          </Container>
        </Segment>
      </Grid.Row>
    </>
  );
};

export default withRouter(Welcome);
