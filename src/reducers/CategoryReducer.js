import { SET_LOADING, GET_CATEGORY, CATEGORY_ERROR } from "../actions/types";

const initialState = {
  categories: null,
  current: null,
  error: null,
  loading: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };

    case CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
