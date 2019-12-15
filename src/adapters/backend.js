const API = 'http://localhost:3000';

const newUser = userData => {
  fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userData }),
  });
};

const newFlight = flightData => {
  fetch(`${API}/flights`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.userAuth,
    },
    body: JSON.stringify({ flightData }),
  });
};

const logIn = userData => {
  fetch(`${API}/login`, {
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
      Authorization: localStorage.userAuth,
    },
  });
};

export { newUser, newFlight, logIn, getCurrentUser };
