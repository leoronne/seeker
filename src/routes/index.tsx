import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </>
);

export default Routes;
