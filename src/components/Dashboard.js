import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Grid,
  Icon,
  Header,
  Image,
  Segment,
  Button,
  Card,
} from 'semantic-ui-react';
import FlightBox from './FlightBox';

const Dashboard = props => {
  const { username, email, history, flights } = props;

  const emptyFlights = () => {
    return (
      <>
        <Image src="sleepy-gary.svg" centered />
        <Segment>
          <p>
            {`  There's nothing here yet!\n Add your first trip to get started.`}
          </p>
        </Segment>
      </>
    );
  };

  return (
    <>
      <Grid.Row>
        <Header as="h3">{`Welcome, ${username || email}!`}</Header>
      </Grid.Row>
      <Grid.Row>
        <Segment
          color="blue"
          className="flights"
          style={{ maxWidth: '820px', width: '100%' }}
        >
          <Header as="h4">Upcoming Trips</Header>

          {!flights.length > 0 ? (
            emptyFlights()
          ) : (
            <FlightBox flights={flights} />
          )}
          <Button
            onClick={() => history.push('/add-flight')}
            style={{ backgroundColor: 'inherit' }}
          >
            <Icon name="plus circle" fitted size="huge" />
          </Button>
        </Segment>
      </Grid.Row>
    </>
  );
};

const msp = state => {
  console.log(state.user);
  return {
    username: state.user.username,
    email: state.user.email,
    flights: state.user.flights,
  };
};

export default withRouter(connect(msp)(Dashboard));
