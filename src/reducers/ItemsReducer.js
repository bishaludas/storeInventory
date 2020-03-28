import { SET_LOADING, ITEMS_ERROR, GET_ITEMS } from "../actions/types";

const initialState = {
  items: null,
  current: null,
  loading: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case ITEMS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
