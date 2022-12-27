import {
  combineReducers,
  createStore
} from "redux";
import { employeReducer } from "../reducer/employeReducer";


export const configStore = () => {
  const myStore = createStore(
      combineReducers({
         employeReducer
      }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return myStore
}