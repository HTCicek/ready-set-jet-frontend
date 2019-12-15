const defaultState = {
  email: '',
  password: '',
  password_confirmation: '',
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL':
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
