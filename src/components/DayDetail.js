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

  render() {
    return (
      <>
      <h1>Summary for: {new Date(this.props.days[this.props.match.params.id]).toUTCString()}</h1>
      <br />
      <h3>Protein: </h3>
      <br />
      <h3>Carbs: </h3>
      <br />
      <h3>Fat: </h3>
      <br />
      <h3>Calories: </h3>
      <hr />
      <h2>Foods</h2>
      <br />
      <h3>LIST FOODS</h3>
      <br />
      <h3><NavLink to={`/dash/days/${this.props.match.params.id}/add`}>Add Food</NavLink></h3>
      </>
    );
  }
}