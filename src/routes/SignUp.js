import React from 'react';

import Footer from '../sections/Footer';
import Main from '../sections/Main';
import Nav from '../sections/Nav';

import SignUpForm from '../components/SignUpForm';
import UserForm from '../components/UserForm';
import SleepForm from '../components/SleepForm';

class SignUp extends React.Component {

  state = {
    step: '',
  }

  setStepState = string => {
    this.setState({
      step: string,
    })
  }
  
  formRender = userFormStep => {
    console.log("formRender switch veing called with: ", userFormStep)
    switch (userFormStep) {
      case 'username':
        return(
          <Main
            compToDisp={
              <UserForm setStepState={this.setStepState}/>
            }
          />
        )
      case 'sleep':
        return(
          <Main
            compToDisp={
              <SleepForm setStepState={this.setStepState}/>
            }
          />
        )      
      default:
        return(
          <Main
            compToDisp={
              <SignUpForm setStepState={this.setStepState}/>
            }
          />
        )    }
  };

  render(){
    const { step } = this.state;
    const { formRender } = this;
    return (
      <>
        <Nav
          compToDisp={{ title: 'Ready Set Jet', button: true, settings: false }}
        />
        {/* 

        TODO
        This could use a refactor, there should be a way to rerender without needing state when using redux.
        
        */}
        {formRender(step)}
        <Footer />
      </>
    );
  };
};

// const msp = state => {
//   console.log('msp called state in SignUp',state)
//   return {
//     step: state.userForm.step,
//   };
// };

export default SignUp;
