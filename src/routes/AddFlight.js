import React from 'react'

import Nav from '../sections/Nav';
import Main from '../sections/Main';
import Footer from '../sections/Footer';

import FlightForm from '../components/FlightForm';

const AddFlight = props => {
  return(
    <>
      <Nav compToDisp={{ title: 'Add Flight', button: true, settings: false }} />
      <Main compToDisp={<FlightForm />} />
      <Footer />
    </>
  )
}

export default AddFlight;