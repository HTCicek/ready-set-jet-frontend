const API = 'http://localhost:3001';

const allLocations = () => {
  return fetch(`${API}/locations`).then(res => res.json());
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

const newFlight = flight => {
  return fetch(`${API}/flights`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ flight }),
  });
};

const logIn = (email, password) => {
  return fetch(`${API}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  // on response set data.token to localstorage, and user to the state
};

const getCurrentUser = () => {
  return fetch(`${API}/auto_login`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token,
    },
  });
};

const updateUser = user => {
  return fetch(`${API}/users/update`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.token,
    },
    body: JSON.stringify({ ...user }),
  });
};

export { allLocations, newUser, newFlight, logIn, getCurrentUser, updateUser };
