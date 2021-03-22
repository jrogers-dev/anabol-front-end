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