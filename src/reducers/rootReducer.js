export default function rootReducer(state = { foods: [], days: {}, loading: false }, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "LOAD_FOODS":
      return {
        ...state,
        foods: action.foods,
        loading: false
      };
    case "DELETE_FOOD":
      return {
        ...state,
        loading: false
      };
    case "LOAD_DAYS":
      let days_hash = {};
      if (action.days) {
        action.days.forEach(day => { days_hash[day.attributes.id] = day.attributes.date });
      }
      return {
        ...state,
        days: days_hash,
        loading: false
      };
    case "DELETE_DAY":
      return {
        ...state,
        loading: false
      };
    case "LOAD_MEALS":
      return {
        ...state,
        meals: action.meals,
        loading: false
      };
    case "DELETE_MEAL":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

    
