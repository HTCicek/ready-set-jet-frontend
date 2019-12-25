const defaultState = {
  id: null,
  username: '',
  email: '',
  flights: [],
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...prevState,
        ...action.payload,
      };
    default:
      return prevState;
  }
}

export default reducer;
