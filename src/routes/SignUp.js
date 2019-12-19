import React from 'react';
import { withRouter } from 'react-router-dom';
import TopNav from '../components/TopNav';
import MainBody from '../components/MainBody';
import SignUpBody from './components/SignUpBody';

const SignUp = props => {
  const { history } = props;

  return (
    <>
      <TopNav
        compToDisp={{title: "Ready Set Jet", button: true, settings: false}}
      />
      <MainBody compToDisp={<SignUpBody />} />
      <footer>{/* Bottomnav */}</footer>
      {/*
        Sign Up Page

        TopNav shows:
          Back Button
          'Ready Set Jet'
        
        MainBody shows:
          'Sign Up'
          description

          form:
            username
            email
            password
            password_confirmation
            button to Create Accound
          T&C disclaimer

        BottomNav shows Link 'I have an Account' links to '/sign-in'

      */}
    </>
  );
};

export default withRouter(SignUp);
