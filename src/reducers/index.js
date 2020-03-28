import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import CategoryReducer from "./CategoryReducer";

export default combineReducers({
  items: ItemsReducer,
  category: CategoryReducer
});
