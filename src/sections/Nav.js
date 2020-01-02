import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu, Icon, Button, Grid } from 'semantic-ui-react';

import { logOut } from '../redux/actions';

const Nav = props => {
  const { history, compToDisp, logOut } = props;

  const { title, button, settings } = compToDisp;

  return (
    <Grid.Row
      as="nav"
      style={{ height: '10vh', maxWidth: '1024px', marginBottom: '5vh' }}
    >
      <Menu borderless style={{ width: '100%' }} widths="3">
        <Menu.Item
          position="left"
          fitted="vertically"
          onClick={() => history.goBack()}
        >
          {/* Back Button */}
          {button ? (
            <Button icon style={{ backgroundColor: 'inherit' }}>
              <Icon name="angle left" />
              Back
            </Button>
          ) : (
            <Icon
              size="small"
              name="paper plane"
              style={{ marginRight: '1.5em' }}
            />
          )}
        </Menu.Item>
        <Menu.Header as="h2">
          {/* Title */}
          {title}
        </Menu.Header>
        <Menu.Item fitted="vertically" position="right">
          {/* Settings Icon Button */}
          {settings ? (
            <Button
              icon
              onClick={() => {
                history.push('/welcome')
                localStorage.removeItem('token');
                localStorage.removeItem('loggedIn');
                logOut();
              }}
              style={{ backgroundColor: 'inherit' }}
            >
              <Icon size="large" name="log out" />
            </Button>
          ) : null}
        </Menu.Item>
      </Menu>
    </Grid.Row>
  );
};

export default withRouter(connect(null, { logOut })(Nav));
