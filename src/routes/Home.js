import React from 'react';
import Nav from '../sections/Nav';
import Main from '../sections/Main';
import Footer from '../sections/Footer';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return(
    <>
      <Nav compToDisp={{ title: 'Dashboard', button: true, settings: true }} />
      <Main compToDisp={<Dashboard />} />
      <Footer />
    </>
  )
};

export default Home;

// Home page

/*
  On state.loading:

  No TopNav

  Main Body shows:
    Display App Image
    App Name
    App description
    Loading Bar
    'Loading your profile...'
 
  No BottomNav

 */

/*
  On state.loading === false

  TopNav shows:
    back button
    'Dashboard'
    menu button
  
  MainBody shows:
    Avatar
    username
    UpcomingTrips
    UpcomingTripContainer

  BottomNav shows:
    Plus Icon links to NewFlightForm
  
*/
