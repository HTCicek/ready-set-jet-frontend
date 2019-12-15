import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import userReducer from './redux/userReducer';
import userFormReducer from './redux/userFormReducer';
import sleepFormReducer from './redux/sleepFormReducer';
import destinatonReducer from './redux/destinationReducer';
import flightFormReducer from './redux/flightFormReducer';
import authReducer from './redux/authReducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  user: userReducer,
  userForm: userFormReducer,
  flightForm: flightFormReducer,
  destinatons: destinatonReducer,
  sleepForm: sleepFormReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
