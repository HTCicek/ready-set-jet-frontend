const defaultState = {
  bed_time: '',
  wake_up_time: '',
  sleep_duration: '',
};

function reducer(prevState = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_WAKE_UP':
      return { ...prevState, wake_up_time: action.payload };
    case 'CHANGE_BED_DOWN':
      return { ...prevState, bed_time: action.payload };
    case 'CHANGE_DURATION':
      return { ...prevState, sleep_duration: action.payload };
    default:
      return prevState;
  }
}

export default reducer;
