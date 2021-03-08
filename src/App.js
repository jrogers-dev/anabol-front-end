import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Landing from './components/Landing.js';
import LoginForm from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import DashContainer from './components/DashContainer.js';
import Logout from './components/Logout.js';


class App extends Component {

  componentDidMount() {
    console.log("App.js@15");
    //Fetch necessary data
  }

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

const mapStateToProps = (state) => {
  return {
    state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
