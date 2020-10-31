import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, CharacterInfo } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/info/:id" exact component={CharacterInfo} />
    </Switch>
  </>
);

export default Routes;
