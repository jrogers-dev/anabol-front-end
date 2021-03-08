import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DayDetail extends Component {

  render() {
    return (
      <>
       <h1>Summary for *insert date*</h1>
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
       <h3><NavLink to="/dash/today/add">Add Food</NavLink></h3>
      </>
    )
  }
}