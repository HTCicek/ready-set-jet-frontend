import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import moment from 'moment-timezone';

const FlightBox = props => {
  const { flights } = props;

  const clickHandler = e => {
    // TODO on clickng a segment, pop up a modal to delete that flight
    // e.persist();
    // e.stopPropagation();
  };

  const flightCard = flightObj => {
    const {
      id,
      departure_time,
      arrival_time,
      flight_time,
      origin,
      destination,
    } = flightObj;
    const flightTime = moment(flight_time.split('T')[1], 'HH:mm')
      .format('HH:mm')
      .split(':');
    const departureTime = moment(departure_time)
      .tz(origin.tz_olson)
      .format('HH:mm z');
    const arrivalTime = moment(arrival_time)
      .tz(destination.tz_olson)
      .format('HH:mm z');
    const [hours, minutes] = flightTime;

    const textAlignLeft = {
      textAlign: 'left'
    }
    return (
      <Segment key={id} color="grey" onClick={clickHandler}>
        <Grid columns={2} verticalAlign="middle">
          <Grid.Column>
            <span style={{ fontSize: '1.5em' }}>
              {`${origin.iata} `}
              <Icon name="plane" size="big" />
              {` ${destination.iata}`}
            </span>
          </Grid.Column>
          <Grid.Column stretched>
            <Grid.Row textAlign="left" stretched style={textAlignLeft}>
              {/* Flight Duration */}
              <strong>Flight Duration:</strong>
              {` ${parseInt(hours, 10)}h ${minutes}m`}
            </Grid.Row>
            <Grid.Row textAlign="left" stretched style={textAlignLeft}>
              {/* Take-off */}
              <strong>Take-Off:</strong>
              {` ${departureTime}`}
            </Grid.Row>
            <Grid.Row textAlign="left" stretched style={textAlignLeft}>
              {/* Arrival */}
              <strong>Arrival:</strong>
              {` ${arrivalTime}`}
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  };

  const renderFlights = flightObjs => {
    const arrOfCards = flightObjs.map(flightObj => {
      return flightCard(flightObj);
    });
    // call map over flights in here
    return <>{arrOfCards}</>;
  };

  return <Segment.Group>{renderFlights(flights)}</Segment.Group>;
};

export default FlightBox;
