import React from 'react';

import Nav from '../sections/Nav';
import Main from '../sections/Main';
import Footer from '../sections/Footer';

import SignInForm from '../components/SignInForm';
import SignInSignedIn from '../components/SignInSignedIn';

const SignIn = props => {
  const navProps = () => {
    if (!localStorage.loggedIn)
      return {
        title: null,
        button: true,
        settings: false,
      };
    return {
      title: 'Ready Set Jet',
      button: true,
      settings: false,
    };
  };

  return (
    <>
      <Nav compToDisp={navProps()} />
      {localStorage.loggedIn ? (
        <Main compToDisp={<SignInSignedIn />} />
      ) : (
        <Main compToDisp={<SignInForm />} />
      )}
      <Footer />
    </>
  );
};

export default SignIn;

// Sign in has two paths
// if !!localStorage.token
// show the continue as page
// otherwise show the regular sign in form

/*
  Continue page

  Has TopNav that show a centered app name

  Has MainBody that shows avatar and username

  Has a Bottom Nav that shows a button to continue (links to '/home')
    and a link 'Choose another Account' that removes localStorage.token 
    and links to '/sign-in' (again)
    might have to just store localStorage.token into auth to have refresh

*/

/*
  Sign in page

  No TopNav

  Has MainBody that shows:
    App Image
    App Name
    Form with:
      Email input
      Password input
      Sign In submit
    'Forgot Password?' link

  Has Bottom Nav with 'Sign Up' link that links to '/sign-up'
*/
