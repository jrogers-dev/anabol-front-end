import React, { Component } from 'react';

export default class Landing extends Component {

  handleLoginClick = (event) => {
    this.props.history.push("/login");
  }

  handleSignupClick = (event) => {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <div className="flex flex-col bg-black h-screen py-20">
        <div className="flex justify-center text-4xl text-white">Anabol.</div>
        <br/>
        <p className="flex justify-center text-center text-white">
          Track calories, macros, and micros. <br/>
          Search recipes based on food you have. <br/>
          Filter results based on your preferred diet. <br/>
        </p>
        <br/>
        <div className="flex flex-row justify-center">
          <button className="bg-green-500 rounded px-2 mx-1" onClick={this.handleLoginClick}>Log In</button> 
          <button className="bg-blue-500 rounded px-2 mx-1" onClick={this.handleSignupClick}>Sign Up</button>
        </div>
      </div>
    )
  }
}