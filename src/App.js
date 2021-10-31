import './App.css';
import React from 'react';
// import { Route, Switch } from 'react-router';

// import HomeComponent from './components/Home/Home'
import Routes from './Routes'

function App() {
  return (
    <main>
      {/* <Switch> */}
        {/* <Route path="/home" component={HomeComponent} exact /> */}
        <Routes />
      {/* </Switch> */}
    </main>
  );
}

export default App;
