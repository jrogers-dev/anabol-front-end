import React, { Component } from 'react';


class FoodList extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    event.preventDefault();
    
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
                <p>&emsp;<button id={food.fields.item_id} onClick={this.handleClick}>Add Food</button></p>
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

        </div>
      );
    }
  }
}


export default FoodList;