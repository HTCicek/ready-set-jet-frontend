const defaultState = {
  authToken: null,
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return { ...prevState, auth: action.payload };
    default:
      return prevState;
  }
}

export default reducer;
