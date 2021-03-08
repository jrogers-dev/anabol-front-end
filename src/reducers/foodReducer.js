const foodsReducer = (state = { foods: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_FOODS":
      return {
        ...state,
        foods: [...state.foods],
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
        foods: [],
        loading: false
      };
    default:
      return state;
  }
}

export default foodsReducer;