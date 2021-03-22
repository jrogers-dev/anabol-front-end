export function fetchDays() {
    return (dispatch) => {
      dispatch({type: "LOADING"});
      fetch(`http://localhost:3000/days`, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => { dispatch({ type: "LOAD_DAYS", days: json.data})})
      ;
    }
  }