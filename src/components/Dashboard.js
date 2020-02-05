import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment-timezone';

import {
  Grid,
  Icon,
  Header,
  Image,
  Segment,
  Button,
} from 'semantic-ui-react';
import FlightBox from './FlightBox';

const Dashboard = props => {
  const { username, email, history, flights, bedTime } = props;

  // TODO dynamically get timezone you're supposed to be in between dates

  let formattedBedTime = '';
  let tzToUse = '';
  if (flights.length > 0) {
    tzToUse = flights[0].origin.tz_olson
    formattedBedTime = moment.tz(bedTime, tzToUse).format('HH:mm z');
  } else {
    tzToUse = 'America/New_York';
    formattedBedTime = moment.tz(bedTime, tzToUse).format('HH:mm z');
  }

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
        {bedTime ? (
          <Header as="h4">{`Today's bed time is ${formattedBedTime}`}</Header>
        ) : null}
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
  return {
    username: state.user.username,
    email: state.user.email,
    flights: state.user.flights,
    bedTime: state.user.bed_time,
  };
};

export default withRouter(connect(msp)(Dashboard));
