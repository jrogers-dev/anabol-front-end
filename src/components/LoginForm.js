import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null
    };

  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({email: event.target.value}, () => { event.target.value = this.state[event.target.name] });
  }

  render() {
    return (
      <>
        <h2><center>Anabol.</center></h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="email" placeholder="Email..."></input>
          <br/>
          <input type="password" name="password" placeholder="Password..."></input>
          <br/>
          <br/>
          <input type="submit" name="submit" value="Login"></input>
        </form>
      </>
    )
  }
}