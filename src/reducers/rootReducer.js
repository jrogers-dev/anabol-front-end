export default function rootReducer(state = { foods: [], days: {}, loading: false }, action) {
  switch (action.type) {
    case "LOADING_FOODS":
      return {
        ...state,
        loading: true
      };
    case "ADD_FOODS":
      return {
        ...state,
        foods: action.foods,
        loading: false
      };
    case "DELETE_FOODS":
      return {
        ...state,
        foods: [],
        loading: false
      };
    case "LOADING_DAYS":
      return {
        ...state,
        loading: true
      };
    case "ADD_DAYS":
      let days_hash = {};
      action.days.forEach(day => { day_array[day.attributes.id] = day.attributes.date });
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
    default:
      return state;
  }
}

    
