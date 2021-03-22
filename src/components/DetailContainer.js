import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchDays } from '../actions/dayActions'
import { fetchFoods } from '../actions/foodActions'
import { fetchMeals } from '../actions/mealActions'

import DayDetail from './DayDetail';
import FoodSearch from './FoodSearch';
import CalendarDetail from './CalendarDetail';
import PantryDetail from './PantryDetail';
import RecipesDetail from './RecipesDetail';


class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDays());
    this.props.dispatch(fetchFoods());
    this.props.dispatch(fetchMeals());
  }

  render() {
    if(this.props.loading === true) {
      return (
        <>
          <h2>Loading...</h2>
        </>
      );
    }
    else {
      return (
        <>
          <Route exact path="/dash/days/:id" component={DayDetail} />
          <Route exact path="/dash/days/:id/add" component={FoodSearch} />
          <Route exact path="/dash/calendar" component={CalendarDetail} />
          <Route exact path="/dash/pantry" component={PantryDetail} />
          <Route exact path="/dash/recipes" component={RecipesDetail} />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(DetailContainer);