const API = 'http://localhost:3001';

const allLocations = () => {
  return fetch(`${API}/locations`)
    .then(res => res.json());
};

const newUser = user => {
  return fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  });
};

const newFlight = flightData => {
  return fetch(`${API}/flights`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ flightData }),
  });
};

const logIn = userData => {
  return fetch(`${API}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userData }),
  });
  // on response set data.token to localstorage, and user to the state
};

const getCurrentUser = () => {
  fetch(`${API}/auto_login`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token,
    },
  });
};

export { allLocations, newUser, newFlight, logIn, getCurrentUser };
