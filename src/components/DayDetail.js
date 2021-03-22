import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { addDay } from '../actions/dayActions';


class DayDetail extends Component {
  constructor(props) {
    super(props);

    let day_exists = this.props.days.find(day => day.id == this.props.match.params.id);
    if(!day_exists) {
      this.props.dispatch(addDay(this.props.match.params.id, this.dateStringWithHyphens(this.props.match.params.id)));
    }

    this.state = {
      todays_meals: [],
      todays_foods: [],
      todays_breakfast: [],
      todays_lunch: [],
      todays_dinner: [],
      todays_snacks: [],
      todays_protein: 0,
      todays_fat: 0,
      todays_carbs: 0,
      todays_calories: 0
    }
  }

  dateStringWithHyphens(dateString) {
    return (
      dateString.substring(0,4)
      + '-' + dateString.substring(4,6)
      + '-' + dateString.substring(6,8)
    );
  }

  calculateTotals() {
    let filtered_meals = this.props.meals.filter(meal => meal.attributes.day_id == this.props.match.params.id);
    let breakfast = filtered_meals.filter(meal => meal.attributes.name == "breakfast").map(m => this.props.foods.filter(food => food.id == m.attributes.food_id)[0]);
    let lunch = filtered_meals.filter(meal => meal.attributes.name == "lunch").map(m => this.props.foods.filter(food => food.id == m.attributes.food_id)[0]);
    let dinner = filtered_meals.filter(meal => meal.attributes.name == "dinner").map(m => this.props.foods.filter(food => food.id == m.attributes.food_id)[0]);
    let snacks = filtered_meals.filter(meal => meal.attributes.name == "snacks").map(m => this.props.foods.filter(food => food.id == m.attributes.food_id)[0]);
    let filtered_foods = filtered_meals.map(meal => this.props.foods.filter(food => meal.attributes.food_id == food.id)[0]);
    let calc_protein = filtered_foods.reduce((total, food) => total + food.attributes.protein, 0);
    let calc_fat = filtered_foods.reduce((total, food) => total + food.attributes.fat, 0);
    let calc_carbs = filtered_foods.reduce((total, food) => total + food.attributes.carbohydrates, 0);
    let calc_calories = filtered_foods.reduce((total, food) => total + food.attributes.calories, 0);

    this.setState({
      todays_meals: filtered_meals,
      todays_foods: filtered_foods,
      todays_breakfast: breakfast,
      todays_lunch: lunch,
      todays_dinner: dinner,
      todays_snacks: snacks,
      todays_protein: calc_protein,
      todays_fat: calc_fat,
      todays_carbs: calc_carbs,
      todays_calories: calc_calories
    });
  }

  componentDidMount() {
    this.calculateTotals();
  }

  render() {
    return (
      <div className="flex flex-col h-full text-white">
        <div className="text-center text-3xl py-4">{new Date(this.props.days.filter(day => day.id === this.props.match.params.id)[0].attributes.date).toUTCString().slice(0, -13)}</div>
        <br />
        <div className="grid grid-cols-3">
          <div className="text-center text-xl">Protein: {Math.round(this.state.todays_protein)}g</div>
          <div className="text-center text-xl">Carbs: {Math.round(this.state.todays_fat)}g</div>
          <div className="text-center text-xl">Fat: {Math.round(this.state.todays_carbs)}g</div>
          <br />
          <div className="text-center col-span-3 text-2xl">Calories: {Math.round(this.state.todays_calories)} kcal</div>
          <br />
        </div>
        <hr />
        <div className="flex-col text-center text-3xl py-4">
          Foods
        </div>
        <NavLink className="bg-blue-900 rounded px-1 w-24 text-center -mt-11 ml-4" to={`/dash/days/${this.props.match.params.id}/add`}>Add Food</NavLink>
        <br />
        <div className="ml-5">
          Breakfast
          {this.state.todays_breakfast.map(food => <p>&emsp;{food.attributes.name}</p>)}
          <br />
          Lunch
          {this.state.todays_lunch.map(food => <p>&emsp;{food.attributes.name}</p>)}
          <br />
          Dinner
          {this.state.todays_dinner.map(food => <p>&emsp;{food.attributes.name}</p>)}
          <br />
          Snacks
          {this.state.todays_snacks.map(food => <p>&emsp;{food.attributes.name}</p>)}
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(DayDetail);