import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR,
} from "../actions/types";
import axios from "axios";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Get the token
    const res = await axios.post(
      "http://127.0.0.1:8001/api/auth/login",
      credentials,
      {
        headers: { headersecret: "bharapasal!" },
      }
    );
    const data = res.data;

    // if credentials do not match fail
    if (data.status === "fail") {
      dispatch({
        type: LOGIN_ERROR,
        message: data.message,
        payload: {
          message: data.message,
          error: data.error,
        },
      });
    } else {
      const user_token = data.apidata.access_token;
      let expiry_time = data.apidata.expires_in;
      expiry_time = setExpiryTime(expiry_time);

      // Set token in localstore
      localStorage.setItem("user_token", user_token);
      const user_details = await getCurrentUser(expiry_time);

      // update user state
      dispatch({
        type: LOGIN_USER,
        payload: {
          currentUser: user_details,
          expiryTime: expiry_time,
          message: data.message,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: {
        error: err.response.statusText,
        message: "Invalid credentials.",
      },
    });
  }
};

export const getUser = () => async (dispatch) => {
  const userState = JSON.parse(localStorage.getItem("userState"));
  const data = await getCurrentUser();
  const authStatus = data !== null ? true : false;
  dispatch({
    type: GET_USER,
    payload: {
      currentUser: data,
      authStatus: authStatus,
      expiryTime: userState ? userState.expiryTime : "",
    },
  });
};

export const getCurrentUser = async (expiry_time = null) => {
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
        expiryTime: expiry_time ? expiry_time : "",
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
      payload: {
        message: res.data.message,
        error: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Expiry time is obtained in seconds
const setExpiryTime = (expiryTime) => {
  let d = new Date();
  let expiry_date = new Date(d.getTime() + expiryTime * 1000);
  return expiry_date;
};
