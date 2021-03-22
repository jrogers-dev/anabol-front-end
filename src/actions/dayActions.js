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
    .then(json => { dispatch({ type: "LOAD_DAYS", days: json.data }) });
  }
}

export function addDay(id, date) {
  return (dispatch) => {
    dispatch({type: "LOADING"});
    fetch(`http://localhost:3000/days`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        day: {
          id: id,
          date: date, 
          user_id: 1
        }
      })
    })
    .then(response => response.json())
    .then(json => { dispatch({ type: "ADD_DAY", day: json.data }) });
  }
}