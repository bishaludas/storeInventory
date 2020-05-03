import {
  GET_CATEGORY,
  ADD_CATEGORY,
  CATEGORY_ERROR,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "../actions/types";

const initialState = {
  categories: null,
  current: null,
  error: null,
  loading: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload.categories],
      };
    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload,
      };

    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.id === action.payload.id ? action.payload : cat
        ),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (cat) => !action.payload.id.includes(cat.id)
        ),
        message: action.payload.message,
      };

    case CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
