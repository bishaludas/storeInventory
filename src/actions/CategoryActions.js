import axios from "axios";
import { GET_CATEGORY, SET_LOADING, CATEGORY_ERROR } from "./types";

export const getCategory = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get("http://127.0.0.1:8001/api/categories");
    const data = res.data.apidata;

    dispatch({
      type: GET_CATEGORY,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
