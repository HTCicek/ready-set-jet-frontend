const defaultState = {
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_UN':
      return { ...prevState, username: action.payload };
    case 'CHANGE_EM':
      return { ...prevState, email: action.payload };
    case 'CHANGE_PW':
      return { ...prevState, password: action.payload };
    case 'CHANGE_PWC':
      return { ...prevState, password_confirmation: action.payload };
    default:
      return prevState;
  }
}

export default reducer;
