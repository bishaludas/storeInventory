import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR,
} from "../actions/types";
const initialState = {
  currentUser: null,
  isAuthenticated: false,
  expiryTime: "",
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload.currentUser,
        expiryTime: action.payload.expiryTime,
        message: action.payload.message,
        error: action.payload.error,
      };

    case GET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isAuthenticated: action.payload.authStatus,
        expiryTime: action.payload.expiryTime,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        currentUser: null,
        error: action.payload.error,
        message: action.payload.message,
        isAuthenticated: false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        message: action.payload.message,
        currentUser: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
