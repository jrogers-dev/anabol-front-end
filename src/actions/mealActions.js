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