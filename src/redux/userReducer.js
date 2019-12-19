const defaultState = {
  user: {},
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...prevState, user: action.payload };
    default:
      return prevState;
  }
}

export default reducer;
