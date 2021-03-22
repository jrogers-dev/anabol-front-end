import React, { Component } from 'react';


class FoodList extends Component {
  
  handleClick = (event) => {
    event.preventDefault();
    let selectedFood = this.props.foods.hits.filter(food => food._id === event.target.id)[0];

    fetch(
      `http://localhost:3000/foods`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          food: {
            rapidapi_id: selectedFood._id, 
            user_id: 1, 
            name: selectedFood.fields.item_name,
            serving: selectedFood.fields.nf_serving_size_unit,
            calories: selectedFood.fields.nf_calories,
            fat: selectedFood.fields.nf_total_fat,
            protein: selectedFood.fields.nf_protein,
            carbohydrates: selectedFood.fields.nf_total_carbohydrate
          }
        })
      }
    )
    .then(response => response.json())
    .then(json => {
      fetch(
        `http://localhost:3000/days/${this.props.id}/meals`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            meal: {
              name: event.target.value,
              day_id: parseInt(this.props.id),
              food_id: parseInt(json.data.id)
            }
          })
        }
      )
      .then(response => response.json())
      .then(json => console.log(json)) 
      .catch(err => console.log(err));
    }) 
    .catch(err => console.log(err));
  }

  render() {
    if (this.props.foods.hits) {
      return(
        <div>
          {this.props.foods.hits.map((food, index) => {
            return (
              <div>
                <p>{food.fields.brand_name} {food.fields.item_name}</p>
                <p>&emsp;Calories: {food.fields.nf_calories}</p>
                <p>&emsp;Total Fat: {food.fields.nf_total_fat}g</p>
                <p>&emsp;Total Carbs: {food.fields.nf_total_carbohydrate}g</p>
                <p>&emsp;Protein: {food.fields.nf_protein}g</p>
                <p>
                  Add to:&emsp;<button id={food.fields.item_id} onClick={this.handleClick} value="breakfast">Breakfast</button>
                  <button id={food.fields.item_id} onClick={this.handleClick} value="lunch">Lunch</button>
                  <button id={food.fields.item_id} onClick={this.handleClick} value="dinner">Dinner</button>
                  <button id={food.fields.item_id} onClick={this.handleClick} value="snacks">Snacks</button>
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


export default FoodList;