import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class CalendarDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      days: []
    }
  }

  dateString(date) {
    function pad(n){
      return n < 10 ? '0'+n : n
    }
    
    return date.getFullYear()
    + pad(date.getMonth()+1)
    + pad(date.getDate()+1);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/days`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          days: json.data
        })
      })
      .catch(err => console.log(err))
    ;
  }

  render() {
    if(this.state.loading)
      return(<h1>Loading...</h1>)
    else {
      return (
        <>
        {this.state.days.map((day => <p>{
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

//new Date(day.attributes.date).toLocaleString().split(',')[0]