import React from 'react';

const SignIn = () => {
  return <div></div>;
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
