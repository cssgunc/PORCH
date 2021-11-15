import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomeComponent from './components/Home/Home'
import DonorDashboard from "./components/DonorDashboard/DonorDashboard";

function App() {
  return (
    <main>
      <Switch>
          <Route path="/home" component={HomeComponent} exact />
          <Route path="/donorDashboard" component={DonorDashboard} exact />
      </Switch>
    </main>
  );
}
export default App;
