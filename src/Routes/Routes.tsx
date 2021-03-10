import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Login from '@pages/Login/Login';
import Home from '@pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
