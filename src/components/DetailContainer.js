import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DayDetail from './DayDetail';
import FoodSearch from './FoodSearch';
import CalendarIndexDetail from './CalendarIndexDetail';
import PantryIndexDetail from './PantryIndexDetail';
import RecipesIndexDetail from './RecipesIndexDetail';


export default class DetailView extends Component {

  render() {
    return (
      <>
        <hr />
        <Route exact path="/dash/today" component={DayDetail} />
        <Route exact path="/dash/today/add" component={FoodSearch} />
        <Route exact path="/dash/calendar" component={CalendarIndexDetail} />
        <Route exact path="/dash/pantry" component={PantryIndexDetail} />
        <Route exact path="/dash/recipes" component={RecipesIndexDetail} />
      </>
    )
  }
}