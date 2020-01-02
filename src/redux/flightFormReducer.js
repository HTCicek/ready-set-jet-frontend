const defaultState = {
  flight_time: null,
  departure_time: '',
  origin: {},
  destination: {},
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'SET_FLIGHT_TIME':
      return {
        ...prevState,
        flight_time: action.payload,
      };
    case 'SET_DEPART_TIME':
      return {
        ...prevState,
        departure_time: action.payload,
      };
    case 'SET_ORIGIN_ID':
      return {
        ...prevState,
        origin: action.payload,
      };
    case 'SET_DEST_ID':
      return {
        ...prevState,
        destination: action.payload,
      };
    default:
      return prevState;
  }
}

export default reducer;
