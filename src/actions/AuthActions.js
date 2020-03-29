import {
  LOGIN_USER,
  //   LOGOUT_USER,
  GET_USER,
  LOGIN_ERROR
} from "../actions/types";
import axios from "axios";

export const loginUser = credentials => async dispatch => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8001/api/auth/login",
      credentials,
      {
        headers: { headersecret: "bharapasal!" }
      }
    );
    const data = res.data;

    if (data.status === "fail") {
      dispatch({
        type: LOGIN_ERROR,
        message: data.message,
        payload: null
      });
    } else {
      // wuckert.verla@example.com
      const user_token = data.apidata.access_token;
      localStorage.setItem("user_token", user_token);
      const user_details = await getCurrentUser();

      dispatch({
        type: LOGIN_USER,
        payload: data.apidata,
        currentUser: user_details
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.statusText
    });
  }
};

export const getUser = () => async dispatch => {
  const data = await getCurrentUser();
  dispatch({
    type: GET_USER,
    payload: data
  });
};

export const logoutUser = () => async dispatch => {};

const getCurrentUser = async () => {
  try {
    if (localStorage.getItem("currentUser") !== null) {
      const data = JSON.parse(localStorage.getItem("currentUser"));
      return data;
    }
    if (localStorage.getItem("user_token") !== null) {
      const res = await axios.post(
        "http://127.0.0.1:8001/api/auth/me",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("user_token")
          }
        }
      );
      const data = res.data.apidata;
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
