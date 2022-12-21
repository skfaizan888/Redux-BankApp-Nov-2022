export const cardReducer = (state = { cards: [], trans: [] }, action) => {
  switch (action.type) {
    case "addCard":
      return {
        ...state,
        cards: action.payload,
      };
    case "addTrans":
      return {
        ...state,
        trans: action.payload,
      };
    default:
      return state;
  }
  return state;
};
