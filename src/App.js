/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { allLocations, getCurrentUser } from './adapters/backend';
import { setLocations, setUser, authToken } from './redux/actions';

import { Grid } from 'semantic-ui-react';

import Home from './routes/Home';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Welcome from './routes/Welcome';
import AddFlight from './routes/AddFlight';

import './App.css';
import SleepForm from './components/SleepForm';
import Main from './sections/Main';
import UserForm from './components/UserForm'
import FlightForm from './components/FlightForm'

class App extends React.Component {

  componentDidMount() {
    const { setLocations, setUser, authToken } = this.props;

    // TODO On mount, remove flights from user if it's 48 hours past that date
    
    allLocations().then(data => {
      // send data to store
      if (data.airports) {
        setLocations(data.airports);
      } else {
        console.error("failed to receive airports")
      }
    });

    if ( localStorage.loggedIn ) {
      getCurrentUser()
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setUser(data.user);
          authToken(data.token)
        })
    }
  }

  rootRouter = () => {
    const { loggedIn } = this.props;
    if (!!localStorage.token && loggedIn) {
      return <Redirect to="/home" />;
    } else if (!!localStorage.token) {
      return <Redirect to="/sign-in" />;
    } else if (!localStorage.token && !!localStorage.welcomeSeen) {
      return <Redirect to="/sign-up" />;
    } else {
      return <Redirect to="/welcome" />;
    }
  }

  render() {
    const { rootRouter } = this;
    const { location } = this.props;
    return (
      <Grid centered columns={1} verticalAlign="middle" container={ location.pathname === '/welcome'} >
        <Switch>

          {/* Start debug routes */}

          <Route path="/debug/sleepForm">
            <Main compToDisp={<SleepForm />} />
          </Route>
          <Route path="/debug/userForm">
            <Main compToDisp={<UserForm />} />
          </Route>
          <Route path="/debug/flightForm">
            <Main compToDisp={<FlightForm />} />
          </Route>

          {/* End debug routes */}

          <Route path="/sign-up">
            {localStorage.loggedIn ? <Redirect to="/sign-in" /> : <SignUp />}
          </Route>
          <Route path="/sign-in">
            {/* <h1>Sign In</h1> */}
            <SignIn />
          </Route>
          <Route path="/home">
            {/* <h1>Home</h1> */}
            <Home />
          </Route>
          <Route path="/add-flight">
            <AddFlight />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">{rootRouter()}</Route>
        </Switch>
      </Grid>
    );
  }
}


export default withRouter(connect(null, { setLocations, setUser, authToken })(App));

/*
  return (
    <Header />  // contains a button that pushes history back if not at splash
    <MainComp />// contains either the splash, form, or dashboard
    <Footer />  // contains button that will essentially 
                // redirect to a new form (addFLightForm, loginForm, signUpForm)
                // 
  )
*/
