import Login from "./components/Login";
import HomeComponent from './components/Home/Home'
import { Route, Switch } from 'react-router';

export default function Routes() {
    return (
      <Switch>
<Route exact path="/login">
  <Login />
</Route>

<Route path="/home" component={HomeComponent} exact />
      </Switch>
    );
  }