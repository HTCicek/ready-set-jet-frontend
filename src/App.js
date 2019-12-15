import React from 'react';
import { withRouter } from 'react-router-dom';

import { CssBaseLine, Container } from '@material-ui/core';
import './App.css';

import NavComp from './components/NavComp';
import Main from './components/Main';
import BottomComp from './components/BottomComp';

function App() {
  return (
    <>
      <CssBaseLine />
      <Container maxWidth="sm">
        <NavComp />
        <Main />
        <BottomComp />
      </Container>
    </>
  );
}

export default withRouter(App);

/*
  return (
    <Header />  // contains a button that pushes history back if not at splash
    <MainComp />// contains either the splash, form, or dashboard
    <Footer />  // contains button that will essentially 
                // redirect to a new form (addFLightForm, loginForm, signUpForm)
                // 
  )
*/
