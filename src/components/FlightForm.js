import React from 'react';
import Fuse from 'fuse.js';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Header, Form, Grid, Button } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import DestinationSearch from './DestinationSearch';

import { newFlight } from '../adapters/backend';
import { getFlightTime, parseFlightDuration } from '../adapters/timeyWimey';
import { addFlight, setOrigin, setDest, setDepartTime } from '../redux/actions';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 10,
  maxPatternLength: 10,
  minMatchCharLength: 3,
  keys: [
    { name: 'name', weight: 0.2 },
    { name: 'city', weight: 0.2 },
    { name: 'iata', weight: 0.6 },
  ],
};

const FlightForm = props => {
  const {
    username,
    email,
    history,
    setOrigin,
    setDest,
    setDepartTime,
    destinations,
    departureTime,
    addFlight,
    origin,
    destination,
  } = props;

  const destinationsFuse = new Fuse(destinations, fuseOptions);

  const submitHandler = e => {
    e.preventDefault();

    // Add flight time to departure time, then take the difference
    const newFlightObj = parseFlightDuration(
      getFlightTime(
        origin.latitude,
        origin.longitude,
        destination.latitude,
        destination.longitude,
      ),
      departureTime,
      true,
    );
    const { arrivalTime, flightTime } = newFlightObj;
    const flight = {
      origin_id: origin.id,
      destination_id: destination.id,
      departure_time: departureTime,
      flight_time: flightTime,
      arrival_time: arrivalTime,
    };
    newFlight(flight)
      .then(res => res.json())
      .then(data => {
        addFlight(data.flight);
        setOrigin({});
        setDest({});
        setDepartTime('');
        history.push('/home');
      });
  };

  return (
    <>
      {/* Use FuseJS library to fuzzyfind flight */}
      <Form onSubmit={submitHandler} className="row one column grid">
        <Grid.Row style={{ maxHeight: '2em', height: '10%' }}>
          <Header as="h4">
            Where are you headed, {`${username || email}?`}
          </Header>
        </Grid.Row>
        <Grid.Row style={{ height: '80%' }}>
          <Grid.Column>
            <Form.Field>
              <label>Where are you headed?</label>
              <DestinationSearch
                fuse={destinationsFuse}
                setLocation={setDest}
              />
            </Form.Field>
            <Form.Field>
              <label>Where are you leaving from?</label>
              <DestinationSearch
                fuse={destinationsFuse}
                setLocation={setOrigin}
              />
            </Form.Field>
            <Form.Field>
              <label>When?</label>
              <DateTimeInput
                value={departureTime}
                closable
                clearable
                pickerWidth="5em"
                hideMobileKeyboard
                onChange={(e, { value }) => setDepartTime(value)}
              />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ maxHeight: '3em', height: '10%' }}>
          <Button type="submit">Add Flight</Button>
        </Grid.Row>
      </Form>
    </>
  );
};

const msp = state => {
  return {
    username: state.user.username,
    email: state.user.email,
    departureTime: state.flightForm.departure_time,
    origin: state.flightForm.origin,
    destination: state.flightForm.destination,
    destinations: state.destinations.airports,
  };
};

export default withRouter(
  connect(msp, {
    addFlight,
    setOrigin,
    setDest,
    setDepartTime,
  })(FlightForm),
);
