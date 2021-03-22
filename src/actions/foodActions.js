export function fetchFoods(searchTerm) {
  return (dispatch) => {
    dispatch({type: "LOADING"});
    fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/${searchTerm}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_protein%2Cnf_total_carbohydrate`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "d0c7efd202mshd71efa7aa963462p129b78jsn273f9b7e10d0",
        "x-rapidapi-host": "nutritionix-api.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(json => { dispatch({ type: "LOAD_FOODS", foods: json}) })
    ;
  }
}