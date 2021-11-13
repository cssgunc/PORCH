import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomeComponent from './components/Home/Home';
import VolunteerDashboard from './components/VolunteerDashboard/index';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={HomeComponent} exact />
        <Route path="/volunteer" component={VolunteerDashboard} exact/>
      </Switch>
    </main>
  );
}

export default App;
