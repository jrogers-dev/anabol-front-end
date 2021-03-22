import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchDays } from '../actions/dayActions'

import DayDetail from './DayDetail';
import FoodSearch from './FoodSearch';
import CalendarDetail from './CalendarDetail';
import PantryDetail from './PantryDetail';
import RecipesDetail from './RecipesDetail';


class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDays());
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
          <hr />
          <Route exact path="/dash/days/:id" render={(props) => <DayDetail {...props} days={this.props.days}/>} />
          <Route exact path="/dash/days/:id/add" component={FoodSearch} />
          <Route exact path="/dash/calendar" render={(props) => <CalendarDetail {...props} days={this.props.days}/>} />
          <Route exact path="/dash/pantry" render={(props) => <PantryDetail {...props} foods={this.props.foods}/>} />
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