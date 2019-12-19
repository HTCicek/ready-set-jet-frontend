import React from 'react';
import MainBody from '../components/MainBody';
import WelcomeBody from './components/WelcomeBody';

const Welcome = () => {
  return (
    <>
      <MainBody compToDisp={WelcomeBody} />
    </>
  );
};

export default Welcome;
