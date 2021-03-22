import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class DayDetail extends Component {
  constructor(props) {
    super(props);

  }

  dateStringWithHyphens(dateString) {
    return (
      dateString.substring(0,4)
      + '-' + dateString.substring(4,6)
      + '-' + dateString.substring(6,8)
    );
  }

  componentDidMount() {
    
  }

  render() {
    if(1 == 1) {
      return (
        <h1>Loading...</h1>
      )
    }
    else {
      return (
        <>
        <h1>Summary for: {new Date(this.state[this.state.id].date).toUTCString()}</h1>
        <br />
        <h3>Protein: {this.state[this.state.id].protein}</h3>
        <br />
        <h3>Carbs: {this.state[this.state.id].carbs}</h3>
        <br />
        <h3>Fat: {this.state[this.state.id].fat}</h3>
        <br />
        <h3>Calories: {this.state[this.state.id].calories}</h3>
        <hr />
        <h2>Foods</h2>
        <br />
        <h3>LIST FOODS</h3>
        <br />
        <h3><NavLink to={`/dash/days/${this.state.id}/add`}>Add Food</NavLink></h3>
        </>
      )
    }
  }
}