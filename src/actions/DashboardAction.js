import { GET_DASHBOARD, DASHBOARD_ERROR } from "../actions/types";

import axios from "axios";

export const getDashboard = () => async (dispatch) => {
  try {
    // dispatch(setLoading());
    const jwt_token = localStorage.getItem("user_token");
    const res = await axios.get("http://127.0.0.1:8001/api/dashboard", {
      headers: {
        Authorization: "Bearer " + jwt_token,
      },
    });
    if (res.data.statusCode === 401) {
      dispatch({
        type: DASHBOARD_ERROR,
        payload: {
          message: res.data.message,
          error: res.data.error,
        },
      });
    }
    const data = res.data.apidata;
    dispatch({
      type: GET_DASHBOARD,
      cat_count: data.total_categories,
      items_count: data.total_items,
      cat_details: data.cat_details,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARD_ERROR,
      payload: {
        message: "Something went wrong.",
        error: error.response.statusText,
      },
    });
  }
};
