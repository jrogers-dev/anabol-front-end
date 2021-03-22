import {addMeal} from './mealActions';

export function fetchFoods() {
  return (dispatch) => {
    dispatch({type: "LOADING"});
    fetch(`http://localhost:3000/foods`, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => { dispatch({ type: "LOAD_FOODS", foods: json.data }) });
  }
}

export function addFood(selectedFood, meal_name, day_id) {
  console.log("foodActions@17");
  return (dispatch) => {
    dispatch({type: "LOADING"});
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
      dispatch({ type: "ADD_FOOD", food: json.data });
      dispatch(addMeal(meal_name, day_id, json.data.id));
    });
  }
}