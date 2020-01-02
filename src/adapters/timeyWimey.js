import moment from 'moment';

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d * 1000; // Converted to m
};

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const getFlightTime = (lat1s, lon1s, lat2s, lon2s) => {
  // 800 kph jet speed in meters per second
  const flightSpeed = 222.222;

  const lat1 = parseFloat(lat1s);
  const lon1 = parseFloat(lon1s);
  const lat2 = parseFloat(lat2s);
  const lon2 = parseFloat(lon2s);

  const flightDistanceInMeters = getDistanceFromLatLonInKm(
    lat1,
    lon1,
    lat2,
    lon2,
  );

  return flightDistanceInMeters / flightSpeed;
};

const parseFlightDuration = (timeOfFlight, timeOfDeparture, obj=false ) => {
  const flightDuration = moment.duration(timeOfFlight, 'seconds');
  const startTime = moment(timeOfDeparture, 'DD-MM-YYYY HH:mm');

  const endTime = moment(timeOfDeparture, 'DD-MM-YYYY HH:mm').add(flightDuration);

  const startTimeFormatted = startTime.utc().format();
  const endTimeFormatted = endTime.utc().format();

  const hours = parseInt(flightDuration.asHours(), 10);
  const minutes = parseInt(flightDuration.asMinutes(), 10) % 60;

  console.log(
    `leaving at${startTimeFormatted}, arriving at ${endTimeFormatted} after ${hours} hours and ${minutes} minutes`,
  );

  const flightTimeObject = {
    departureTime: startTime,
    arrivalTime: endTime,
    flightTime: flightDuration,
  };

  if (obj) return flightTimeObject;
  return flightDuration;
};

export { parseFlightDuration, getFlightTime };
