export const loanReducer = (state = { cats: [] }, action) => {
  switch (action.type) {
    case "addCats":
      return {
        ...state,
        cats: action.payload,
      };
    default:
      return state;
  }
  return state;
};
