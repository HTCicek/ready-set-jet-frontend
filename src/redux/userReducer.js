const defaultState = {
  id: null,
  username: '',
  email: '',
  bed_time: '',
  wake_up_time: '',
  flights: [],
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...prevState,
        ...action.payload,
      };
    case 'ADD_FLIGHT':
      return {
        ...prevState,
        flights: [...prevState.flights, action.payload],
      };
    case 'LOG_OUT':
      return { ...defaultState };
    default:
      return prevState;
  }
}

export default reducer;
