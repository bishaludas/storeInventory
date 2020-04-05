import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR,
} from "../actions/types";
const initialState = {
  currentUser: null,
  isAuthenticated: false,
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.currentUser,
        message: action.message,
        error: action.error,
      };

    case GET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: action.authStatus,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
        message: action.message,
        isAuthenticated: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
