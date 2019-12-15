const defaultState = {
  id: null,
  bedTime: null,
  wakeUpTime: null,
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'auth':
      return prevState;
    default:
      return prevState;
  }
}

export default reducer;
