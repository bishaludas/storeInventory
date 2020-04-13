import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR,
} from "../actions/types";
import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8001/api/auth/login",
      credentials,
      {
        headers: { headersecret: "bharapasal!" },
      }
    );
    const data = res.data;

    if (data.status === "fail") {
      dispatch({
        type: LOGIN_ERROR,
        message: data.message,
        payload: data.error,
      });
    } else {
      const user_token = data.apidata.access_token;
      localStorage.setItem("user_token", user_token);
      const user_details = await getCurrentUser();
      dispatch({
        type: LOGIN_USER,
        payload: data.apidata,
        currentUser: user_details,
        message: data.message,
        error: null,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      message: "Invalid credentials.",
      payload: err.response.statusText,
    });
  }
};

export const getUser = () => async (dispatch) => {
  const data = await getCurrentUser();
  const authStatus = data !== null ? true : false;
  dispatch({
    type: GET_USER,
    payload: data,
    authStatus: authStatus,
  });
};

export const getCurrentUser = async () => {
  try {
    const userState = localStorage.getItem("userState");
    const jwt_token = localStorage.getItem("user_token");

    // if user is authenticated return from localstore
    if (userState !== null) {
      const data = JSON.parse(userState).currentUser;
      return data;
    }

    // if user is not authenticated, fetch data and return
    if (jwt_token !== null) {
      const res = await axios.post(
        "http://127.0.0.1:8001/api/auth/me",
        {},
        {
          headers: {
            Authorization: "Bearer " + jwt_token,
          },
        }
      );
      const data = res.data.apidata;
      const userData = {
        currentUser: data,
        isAuthenticated: true,
      };
      localStorage.setItem("userState", JSON.stringify(userData));
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8001/api/auth/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      }
    );

    // clear localStore
    localStorage.removeItem("user_token");
    localStorage.removeItem("userState");

    // clear state
    dispatch({
      type: LOGOUT_USER,
      message: res.data.apidata,
      error: null,
    });
  } catch (err) {
    console.log(err);
  }
};
