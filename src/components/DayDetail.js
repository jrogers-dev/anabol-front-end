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
    if (this.props.location.pathname === "/dash/day/today") {
      let d = new Date();

      fetch(`http://localhost:3000/days/20210316`)
        .then(response => response.json())
        .then(json => {
          if(json.status === 404 && json.exception.includes("RecordNotFound")) {
            fetch(
              `http://localhost:3000/days`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({day: {id: 20210316, user_id: 1, date: this.dateString(d, "-")}})
              }
            ).then(response => response.json()).then(json => {
              this.setState({
                ...this.state,
                [json.data.attributes.id]: {
                  user_id: json.data.attributes.user_id,
                  date: json.data.attributes.date
                }
              }, () => {console.log(this.state)})
            })
          } 
          else {
            this.setState({
              loading: false,
              [json.data.attributes.id]: {
                user_id: json.data.attributes.user_id,
                date: json.data.attributes.date
              }
            }, () => {console.log(this.state)})
          }
        })
        .catch(err => console.log(err))
      ;
    }
  }

  render() {
    if(this.state.loading === true) {
      return (
        <h1>Loading...</h1>
      )
    }
    else {
      return (
        <>
        <h1>Summary for: {this.state[20210316].date}</h1>
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
}