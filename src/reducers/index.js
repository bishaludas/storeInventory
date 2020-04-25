import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import CategoryReducer from "./CategoryReducer";
import AuthReducer from "./AuthReducer";
import DashboardReducer from "./DashboardReducer";

export default combineReducers({
  items: ItemsReducer,
  category: CategoryReducer,
  user: AuthReducer,
  dashboard: DashboardReducer,
});
