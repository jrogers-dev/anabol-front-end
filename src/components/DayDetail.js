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
            [this.state.id]: {
              user_id: json.data.attributes.user_id,
              date: json.data.attributes.date,
              protein: 0,
              carbs: 0,
              fat: 0,
              calories: 0
            }
          });

          fetch(`http://localhost:3000/days/${this.state.id}/meals`)
            .then(response => response.json())
            .then(json => {
              this.setState({
                ...this.state,
                loading: false,
                [this.state.id]: {
                  ...this.state[this.state.id],
                  meals: json.data
                }
              })
            });
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
        <h3>{this.state[this.state.id].meals.filter(meal => meal.attributes.name === "breakfast").map(m => <p>{m.attributes.food_id}</p>)}</h3>
        <br />
        <h3><NavLink to={`/dash/days/${this.state.id}/add`}>Add Food</NavLink></h3>
        </>
      )
    }
  }
}