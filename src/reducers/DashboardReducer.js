import { GET_DASHBOARD, DASHBOARD_ERROR } from "../actions/types";

const initialState = {
  cat_count: null,
  items_count: null,
  cat_details: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD:
      return {
        ...state,
        cat_count: action.cat_count,
        items_count: action.items_count,
        cat_details: action.cat_details,
        loading: false,
      };

    case DASHBOARD_ERROR:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
