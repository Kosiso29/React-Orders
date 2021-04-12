import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import SignIn from './containers/SignIn/SignIn';
import Dashboard from './containers/Dashboard/Dashboard';
import Orders from "./containers/Orders/Orders";
import Transactions from './containers/Transactions/Transactions';
import Navigation from './components/Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/Dashboard">
            <Navigation />
            <Dashboard />
          </Route>
          <Route path="/Orders">
            <Navigation />
            <Orders />
          </Route>
          <Route path="/Transactions">
            <Navigation />
            <Transactions />
          </Route>
          {/* <Route path="/Orders" component={Orders} />
          <Route path="/Transactions" component={Transactions} /> */}
          <Route path="/" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
