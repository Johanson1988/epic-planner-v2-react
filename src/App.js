import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//Global Pages

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

//Private Pages

import MyDayplans from './pages/MyDayplans';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/my-dayplans" component={MyDayplans} />
      </Switch>
    </div>
  );
}

export default App;