const authToken = tokenString => {
  return { type: 'GET_TOKEN', payload: tokenString };
};

const changeUsername = string => {
  return { type: 'CHANGE_UN', payload: string };
};

const changeEmail = string => {
  return { type: 'CHANGE_EM', payload: string };
};

const changePass = string => {
  return { type: 'CHANGE_PW', payload: string };
};

const changePassConf = string => {
  return { type: 'CHANGE_PWC', payload: string };
};

const setUser = userObj => {
  return { type: 'SET_USER', payload: userObj };
};

const setLocations = locArr => {
  return { type: 'RECEIVE_DESTINATIONS', payload: locArr };
};

const changeWakeUp = time => {
  return { type: 'CHANGE_WAKE_UP', payload: time };
};

const changeBedDown = time => {
  return { type: 'CHANGE_BED_DOWN', payload: time };
};

const setFlightTime = time => {
  return { type: 'SET_FLIGHT_TIME', payload: time };
};

const setDepartTime = time => {
  return { type: 'SET_DEPART_TIME', payload: time };
};

const setOrigin = num => {
  return { type: 'SET_ORIGIN_ID', payload: num };
};

const setDest = num => {
  return { type: 'SET_DEST_ID', payload: num };
};

const addFlight = flightObj => {
  return { type: 'ADD_FLIGHT', payload: flightObj };
};

const setUserFormStep = stepName => {
  return { type: 'SET_STEP', payload: stepName };
};

const logOut = () => {
  return { type: 'LOG_OUT' }
}

export {
  authToken,
  changeUsername,
  changeEmail,
  changePass,
  changePassConf,
  setUser,
  setLocations,
  changeWakeUp,
  changeBedDown,
  setFlightTime,
  setOrigin,
  setDest,
  setDepartTime,
  addFlight,
  setUserFormStep,
  logOut,
};
