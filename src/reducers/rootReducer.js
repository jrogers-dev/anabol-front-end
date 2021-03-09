export default function rootReducer(state = { foods: [], days: [], loading: false }, action) {
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
      return {
        ...state,
        days: action.days,
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

    
