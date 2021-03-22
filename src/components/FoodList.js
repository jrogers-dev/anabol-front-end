import React, { Component } from 'react';
import {addFood} from '../actions/foodActions';
import {addMeal} from '../actions/mealActions';
import { connect } from 'react-redux';
import { History } from 'history';



class FoodList extends Component {
  
  handleClick = (event) => {
    event.preventDefault();
    let selectedFood = this.props.found_foods.hits.filter(food => food._id === event.target.id)[0];
    let food_exists = this.props.foods.find(food => food.attributes.rapidapi_id == selectedFood._id);
    
    if(food_exists){
      this.props.dispatch(addMeal(event.target.value, parseInt(this.props.id), food_exists.id))
    }
    else{
      this.props.dispatch(addFood(selectedFood, event.target.value, parseInt(this.props.id)));
    }
  }

  render() {
    if (this.props.found_foods.hits) {
      return(
        <div>
          {this.props.found_foods.hits.map((food, index) => {
            return (
              <div>
                <p>{food.fields.brand_name} {food.fields.item_name}</p>
                <p>&emsp;Calories: {food.fields.nf_calories}</p>
                <p>&emsp;Total Fat: {food.fields.nf_total_fat}g</p>
                <p>&emsp;Total Carbs: {food.fields.nf_total_carbohydrate}g</p>
                <p>&emsp;Protein: {food.fields.nf_protein}g</p>
                <p className="mt-1">
                  Add to:&emsp;<button className="bg-blue-900 rounded px-1 mx-1" id={food.fields.item_id} onClick={this.handleClick} value="breakfast">Breakfast</button>
                  <button className="bg-blue-900 rounded px-1 mx-1" id={food.fields.item_id} onClick={this.handleClick} value="lunch">Lunch</button>
                  <button className="bg-blue-900 rounded px-1 mx-1" id={food.fields.item_id} onClick={this.handleClick} value="dinner">Dinner</button>
                  <button className="bg-blue-900 rounded px-1 mx-1" id={food.fields.item_id} onClick={this.handleClick} value="snacks">Snacks</button>
                </p>
                <br />
              </div>
            )
          })}
        </div>
      );
    }
    else {
      return(
        <div>
          <p>Search for foods...</p>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(FoodList);