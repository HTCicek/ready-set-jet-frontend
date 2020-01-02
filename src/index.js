import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-less/semantic.less';

import './index.css';
import App from './App';

import userReducer from './redux/userReducer';
import userFormReducer from './redux/userFormReducer';
import destinatonReducer from './redux/destinationReducer';
import flightFormReducer from './redux/flightFormReducer';
import authReducer from './redux/authReducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  user: userReducer,
  userForm: userFormReducer,
  flightForm: flightFormReducer,
  destinations: destinatonReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
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
