import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DayDetail from './DayDetail';
import FoodSearch from './FoodSearch';
import CalendarDetail from './CalendarDetail';
import PantryDetail from './PantryDetail';
import RecipesDetail from './RecipesDetail';


export default class DetailView extends Component {

  render() {
    return (
      <>
        <hr />
        <Route path="/dash/days/" component={DayDetail} />
        <Route exact path="/dash/days/today/add" component={FoodSearch} />
        <Route exact path="/dash/calendar" component={CalendarDetail} />
        <Route exact path="/dash/pantry" component={PantryDetail} />
        <Route exact path="/dash/recipes" component={RecipesDetail} />
      </>
    )
  }
}