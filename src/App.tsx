import React from 'react';
import './App.css';
import SignIn from './components/sign-in/SignIn';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Notfound from './components/notfound/notfound';

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
