import React from 'react';
import { withRouter } from 'react-router-dom';

import { CssBaseline, Container, Toolbar, Grid } from '@material-ui/core';
import './App.css';

import AppNavBar from './components/NavComp';
import MainBody from './components/Main';
import BottomComp from './components/BottomComp';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <AppNavBar />
          <Toolbar />
          <MainBody />
          <Toolbar />
          <BottomComp />
        </Grid>
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
