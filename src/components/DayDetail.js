import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class DayDetail extends Component {
  constructor(props) {
    super(props);

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
      <>
      <h1>Summary for: {new Date(this.props.days.filter(day => day.id === this.props.match.params.id)[0].attributes.date).toUTCString()}</h1>
      <br />
      <h3>Protein: {this.state.todays_protein}g</h3>
      <br />
      <h3>Carbs: {this.state.todays_fat}g</h3>
      <br />
      <h3>Fat: {this.state.todays_carbs}g</h3>
      <br />
      <h3>Calories: {this.state.todays_calories}kcal</h3>
      <hr />
      <h2>Foods</h2>
      <h4>&emsp;<NavLink to={`/dash/days/${this.props.match.params.id}/add`}>Add Food</NavLink></h4>
      <br />
      <h3>Breakfast</h3>
      <h4>{this.state.todays_breakfast.map(food => <p>&emsp;{food.attributes.name}</p>)}</h4>
      <br />
      <h3>Lunch</h3>
      <h4>{this.state.todays_lunch.map(food => <p>&emsp;{food.attributes.name}</p>)}</h4>
      <br />
      <h3>Dinner</h3>
      <h4>{this.state.todays_dinner.map(food => <p>&emsp;{food.attributes.name}</p>)}</h4>
      <br />
      <h3>Snacks</h3>
      <h4>{this.state.todays_snacks.map(food => <p>&emsp;{food.attributes.name}</p>)}</h4>
      <br />
      </>
    );
  }
}