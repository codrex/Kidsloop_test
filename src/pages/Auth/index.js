import React from 'react';
import { Router } from '@reach/router';

import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import { routes } from '../../contants';

function Auth() {
  return (
    <Router>
      <Login path={routes.signIn} default />
      <Signup path={routes.signUp} />
      <ResetPassword path={routes.resetPassword} />
    </Router>
  );
}

export default Auth;
