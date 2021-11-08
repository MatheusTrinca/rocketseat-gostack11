import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
