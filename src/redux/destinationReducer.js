const defaultState = {
  airports: [],
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_DESTINATIONS':
      return { ...prevState, airports: [...action.payload] };
    default:
      return prevState;
  }
}

export default reducer;
