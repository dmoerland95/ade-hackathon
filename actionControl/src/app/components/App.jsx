import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'modules/Dashboard';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={Dashboard} exact />
    </Switch>
  </main>
);

export default App;
