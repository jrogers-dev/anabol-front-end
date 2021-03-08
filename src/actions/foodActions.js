export function fetchFoods() {
  return (dispatch) => {
    dispatch({type: "LOADING_FOODS"});
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then(response => {return response.json()})
      .then(json => { dispatch({ type: "ADD_FOODS", foods: json})})
    ;
  }
}