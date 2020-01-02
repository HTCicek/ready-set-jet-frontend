import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'semantic-ui-react';

import { changeUsername, setUser, setUserFormStep } from '../redux/actions';

import { updateUser } from '../adapters/backend';

const UserForm = props => {
  const { username, changeUsername, setUser, setUserFormStep, setStepState } = props;

  const submitHandler = e => {
    e.preventDefault();

    const user = { username };

    updateUser(user)
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setUserFormStep('sleep');
        setStepState('sleep');
      });
  };
  return (
    <>
      <Form onSubmit={submitHandler} className="grid one column">
        <Form.Field className="row centered">
          <label>How would you like to be called?</label>
          <Input
            type="text"
            placeholder="Eugene Tamer"
            onChange={e => changeUsername(e.target.value)}
            value={username}

          />
        </Form.Field>
        <div className="row centered">
          <Button type="submit" icon="angle right"/>
        </div>
      </Form>
    </>
  );
};

const msp = state => ({
  username: state.userForm.username,
});

export default connect(msp, { changeUsername, setUser, setUserFormStep })(UserForm);
