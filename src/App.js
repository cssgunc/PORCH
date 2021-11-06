import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';

import HomeComponent from './components/Home/Home'
import TopNavBarComponent from './components/TopNavBar/TopNavBar'

function App() {
  return (
    <main>
      <Switch>
          <Route path="/home" component={HomeComponent} exact />
          <Route path="/topNavBar" component={TopNavBarComponent} exact />
      </Switch>
    </main>
  );
}
export default App;
