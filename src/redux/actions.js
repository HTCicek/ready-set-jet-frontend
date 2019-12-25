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

export { authToken, changeUsername, changeEmail, changePass, changePassConf, setUser, setLocations };
