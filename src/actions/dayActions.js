export function fetchDays() {
    return (dispatch) => {
      dispatch({type: "LOADING_DAYS"});
      fetch(`http://localhost:3000/days`, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => { dispatch({ type: "ADD_DAYS", foods: json.data})})
      ;
    }
  }