import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, CharacterInfo, NotFound } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/info/:id" exact component={CharacterInfo} />
      <Route path="/not-found" exact component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default Routes;
