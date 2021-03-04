import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DayDetail from './DayDetail';
import CalendarIndexDetail from './CalendarIndexDetail';
import PantryIndexDetail from './PantryIndexDetail';
import RecipesIndexDetail from './RecipesIndexDetail';


export default class DetailView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <Route path="/dash/today" component={DayDetail} />
        <Route path="/dash/calendar" component={CalendarIndexDetail} />
        <Route exact path="/dash/pantry" component={PantryIndexDetail} />
        <Route exact path="/dash/recipes" component={RecipesIndexDetail} />
      </>
    )
  }
}