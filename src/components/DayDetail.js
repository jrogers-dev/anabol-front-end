import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DayDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  dateString(date, separator = "") {
    function pad(n){
      return n < 10 ? '0'+n : n
    }
    
    return date.getFullYear()+separator
    + pad(date.getMonth()+1)+separator
    + pad(date.getDate());
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <>
      <h1>Summary for: </h1>
      <br />
      <h3>Protein:</h3>
      <br />
      <h3>Carbs:</h3>
      <br />
      <h3>Fat:</h3>
      <br />
      <h3>Calories:</h3>
      <hr />
      <h2>Foods</h2>
      <br />
      <h3>*List Foods*</h3>
      <br />
      <h3><NavLink to="/dash/days/today/add">Add Food</NavLink></h3>
      </>
    )
  }
}