const defaultState = {
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  bed_time: '',
  wake_up_time: '',
  step: '',
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
    case 'CHANGE_WAKE_UP':
      return { ...prevState, wake_up_time: action.payload };
    case 'CHANGE_BED_DOWN':
      return { ...prevState, bed_time: action.payload };
    case 'SET_STEP':
      return { ...prevState, userFormStep: action.payload };
    case 'LOG_OUT':
      return { ...defaultState };
    default:
      return prevState;
  }
}

export default reducer;
