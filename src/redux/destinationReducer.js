const defaultState = {
  destinations: [],
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_DESTINATIONS':
      return { ...prevState, destinations: [...action.payload] };
    default:
      return prevState;
  }
}

export default reducer;
