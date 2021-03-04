import React, { Component } from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);

  }

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
          Track calories, macros, and micros. <br/>
          Search recipes based on food you have. <br/>
          Filter results based on your preferred diet. <br/>
        </p>
        <br/>
        <button onClick={this.handleLoginClick}>Log In</button>
        <button onClick={this.handleSignupClick}>Sign Up</button>
      </>
    )
  }
}