import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

//Global Pages

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

//Private Pages

import MyDayplans from './pages/MyDayplans';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/my-dayplans" component={MyDayplans} />
        </Switch>
      </div>
    );
  };
};

export default App;