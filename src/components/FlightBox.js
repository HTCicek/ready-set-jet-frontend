import React from 'react';
import { Segment } from 'semantic-ui-react';

const FlightBox = props => {
  const { flights } = props;

  const flightCard = flightObj => {
    const {
      id,
      departure_time,
      arrival_time,
      flight_time,
      origin,
      destination,
    } = flightObj;

    return <Segment key={id}>{/* We'll figure this out */}</Segment>;
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
