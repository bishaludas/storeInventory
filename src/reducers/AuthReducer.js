import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR
} from "../actions/types";
const initialState = {
  currentUser: null,
  isAuthenticated: null,
  message: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.currentUser
      };

    case GET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        message: action.message
      };

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      };

    default:
      return state;
  }
};
