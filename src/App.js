import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './components/Login/Login';

import HomeComponent from './components/Home/Home'
import Signup from './components/Login/Signup';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/home" component={HomeComponent} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </main>
  );
} 

export default App;
