import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomeComponent from './components/Home/Home'
import DonorDashboard from "./components/DonorDashboard/DonorDashboard";
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import LogDonations from './components/LogDonations/LogDonations'
import VolunteerDashboard from './components/VolunteerDashboard/VolunteerDashboard';
import Settings from './components/Settings/Settings';

function App() {
  return (
    
    <main>
      <Switch>
          <Route path="/home" component={HomeComponent} exact />
          <Route path="/donorDashboard" component={DonorDashboard} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logDonations" component={LogDonations} exact />
          <Route path="/volunteerDashboard" component={VolunteerDashboard} exact />
          <Route path="/settings" component={Settings} exact />
      </Switch>
    </main>
    
  );
}
export default App;
