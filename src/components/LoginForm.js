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
    this.props.history.push("/dash");
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({email: event.target.value}, () => { event.target.value = this.state[event.target.name] });
  }

  render() {
    return (
      <div className="flex flex-col bg-black h-screen py-20">
        <div className="flex justify-center text-4xl text-white">Anabol.</div>
        <br/>
        <form className="grid grid-rows-3 justify-center" onSubmit={this.handleSubmit}>
          <input className="text-black rounded px-1" onChange={this.handleChange} type="text" name="email" placeholder="Email..."></input>
          <br/>
          <input className="text-black rounded px-1" type="password" name="password" placeholder="Password..."></input>
          <br/>
          <br/>
          <input className="bg-green-500 rounded px-1" type="submit" name="submit" value="Login"></input>
        </form>
      </div>
    )
  }
}