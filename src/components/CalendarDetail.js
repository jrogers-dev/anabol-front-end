import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class CalendarDetail extends Component {
  constructor(props) {
    super(props);

  }

  dateString(date) {
    function pad(n){
      return n < 10 ? '0'+n : n
    }
    
    return date.getFullYear()
    + pad(date.getMonth()+1)
    + pad(date.getDate()+1);
  }

  render() {
    if(this.props.days) {
      return (
        <>
        {this.props.days.map((day => <p>{
          <NavLink 
            to={`/dash/days/${this.dateString(new Date(day.attributes.date))}`}
            exact 
          >
            {day.attributes.date}
          </NavLink>
        }</p>))}
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(CalendarDetail);