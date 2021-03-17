import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class DayDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: props.match.params.id
    }
  }

  dateStringWithHyphens(dateString) {
    return (
      dateString.substring(0,4)
      + '-' + dateString.substring(4,6)
      + '-' + dateString.substring(6,8)
    );
  }

  componentDidMount() {
    fetch(`http://localhost:3000/days/${this.state.id}`)
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
              body: JSON.stringify({day: {id: this.state.id, user_id: 1, date: new Date(this.dateStringWithHyphens(this.state.id)) }})
            }
          ).then(response => response.json()).then(json => {
            this.setState({
              ...this.state,
              loading: false,
              [json.data.attributes.id]: {
                user_id: json.data.attributes.user_id,
                date: json.data.attributes.date
              }
            })
          })
        } 
        else {
          this.setState({
            ...this.state,
            loading: false,
            [json.data.attributes.id]: {
              user_id: json.data.attributes.user_id,
              date: json.data.attributes.date
            }
          })
        }
      })
      .catch(err => console.log(err))
    ;
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
        <h1>Summary for: {new Date(this.state[this.state.id].date).toUTCString()}</h1>
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
        <h3><NavLink to={`/dash/days/${this.state.id}/add`}>Add Food</NavLink></h3>
        </>
      )
    }
  }
}