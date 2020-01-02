import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { withRouter } from 'react-router-dom';

import { Header, Form, Button } from 'semantic-ui-react';
import { TimeInput } from 'semantic-ui-calendar-react';

import {
  changeWakeUp,
  changeBedDown,
  setUser,
  setUserFormStep,
} from '../redux/actions';

import { updateUser } from '../adapters/backend';

const SleepForm = props => {
  const {
    history,
    bedTime,
    wakeUpTime,
    changeBedDown,
    changeWakeUp,
    setUser,
    setUserFormStep,
    setStepState,
  } = props;

  const handleChange = (e, { name, value }) => {
    if (name === 'bed_time') changeBedDown(value);
    if (name === 'wake_up_time') changeWakeUp(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const bed_time = moment(bedTime, 'HH:mm Z');
    const wake_up_time = moment(wakeUpTime, 'HH:mm Z');
    const user = { bed_time, wake_up_time };

    updateUser(user)
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setUserFormStep('');
        setStepState('');
        history.push('/home');
      });
  };

  return (
    <>
      <Header className="row">How much sleep do you like to get?</Header>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>When does your day end?</label>
          <TimeInput
            closable
            hideMobileKeyboard
            clearable
            name="bed_time"
            placeholder="Sleep time"
            value={bedTime}
            icon="moon"
            iconPosition="left"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>When does your day begin?</label>
          <TimeInput
            closable
            hideMobileKeyboard
            clearable
            name="wake_up_time"
            placeholder="Wake up time"
            value={wakeUpTime}
            icon="sun"
            iconPosition="left"
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" icon="angle right" />
      </Form>
    </>
  );
};

const msp = state => ({
  bedTime: state.userForm.bed_time,
  wakeUpTime: state.userForm.wake_up_time,
});

export default withRouter(
  connect(msp, {
    changeWakeUp,
    changeBedDown,
    setUser,
    setUserFormStep,
  })(SleepForm),
);
