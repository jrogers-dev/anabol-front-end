import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class VerticalNavBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <NavLink 
          to="/dash/today" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Today</NavLink>
        <br />
        <NavLink 
          to="/dash/calendar" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Calendar</NavLink>
        <br />
        <NavLink 
          to="/dash/pantry" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Pantry</NavLink>
        <br />
        <NavLink 
          to="/dash/recipes" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Recipes</NavLink>
        <br />
        <NavLink 
          to="/dash/logout" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Log Out</NavLink>
      </>
    )
  }
}