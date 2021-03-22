import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Landing from './components/Landing.js';
import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import DashContainer from './components/DashContainer.js';
import Logout from './components/Logout.js';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={RegistrationForm} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/dash" component={DashContainer} />
        </Router>
      </div>
    );
  }
}
