import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class VerticalNavBar extends Component {

  dateString(date) {
    function pad(n){
      return n < 10 ? '0'+n : n
    }
    
    return date.getFullYear()
    + pad(date.getMonth()+1)
    + pad(date.getDate());
  }

  render() {
    return (
      <div className="flex flex-col h-screen">
        <NavLink 
          to={`/dash/days/${this.dateString(new Date())}`}
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
          to="/logout" 
          exact 
          style={{color: "lightblue"}} 
          activeStyle={{ color: "green"}}
        >Log Out</NavLink>
      </div>
    )
  }
}