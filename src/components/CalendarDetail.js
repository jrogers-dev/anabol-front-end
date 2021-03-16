import React, { Component } from 'react';

export default class CalendarDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      days: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/days`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          days: json.data
        }, () => console.log(this.state))
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
        {this.state.days.map((day => <p>{new Date(day.attributes.date).toLocaleString().split(',')[0]}</p>))}
        </>
      )
    }
  }
}