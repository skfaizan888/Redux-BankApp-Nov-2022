import { createStore, combineReducers } from "redux";
import { loanReducer } from "../reducer/loanReducer";
import { cardReducer } from "../reducer/cardReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ loanReducer, cardReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
