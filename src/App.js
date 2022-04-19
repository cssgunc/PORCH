import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomeComponent from './components/Home/Home'
import DonorDashboard from "./components/DonorDashboard/DonorDashboard";
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import LogDonations from './components/LogDonations/LogDonations'

function App() {
  return (
    
    <main>
      <Switch>
          <Route path="/home" component={HomeComponent} exact />
          <Route path="/donorDashboard" component={DonorDashboard} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logDonations" component={LogDonations} exact />
      </Switch>
    </main>
    
  );
}
export default App;
