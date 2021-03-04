import React, { Component } from 'react';

export default class Logout extends Component {

  handleLoginClick = (event) => {
    this.props.history.push("/login");
  }

  handleSignupClick = (event) => {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <>
        <h2><center>Anabol.</center></h2>
        <br/>
        <p>
          You have successfully logged out. <br/>
        </p>
        <br/>
        <button onClick={this.handleLoginClick}>Log In</button>
        <button onClick={this.handleSignupClick}>Sign Up</button>
      </>
    )
  }
}