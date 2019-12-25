const defaultState = {
  token: localStorage.token,
  loggedIn: localStorage.loggedIn,
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'GET_TOKEN':
      return { ...prevState, token: action.payload, loggedIn: true };
    default:
      return prevState;
  }
}

export default reducer;
