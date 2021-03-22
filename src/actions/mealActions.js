export function fetchMeals() {
  return (dispatch) => {
    dispatch({type: "LOADING"});
    fetch(`http://localhost:3000/meals`, {
      "method": "GET",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => { dispatch({ type: "LOAD_MEALS", meals: json.data }) });
  }
}

export function addMeal(name, day_id, food_id) {
  return (dispatch) => {
    dispatch({type: "LOADING"});
    fetch(
      `http://localhost:3000/meals`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          meal: {
            name: name,
            day_id: day_id,
            food_id: food_id
          }
        })
      }
    )
    .then(response => response.json())
    .then(json => { dispatch({ type: "ADD_MEAL", meal: json.data }) });
  }
}