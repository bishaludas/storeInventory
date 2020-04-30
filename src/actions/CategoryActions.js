import axios from "axios";
import {
  GET_CATEGORY,
  SET_LOADING,
  CATEGORY_ERROR,
  ADD_CATEGORY,
} from "./types";

export const getCategory = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get("http://127.0.0.1:8001/api/categories");
    const data = res.data.apidata;

    dispatch({
      type: GET_CATEGORY,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const AddCategory = (input) => async (dispatch) => {
  try {
    const res = axios.post("http://127.0.0.1:8001/api/categories", input, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user_token"),
      },
    });
    const data = res.data;
    console.log(data);
    // dispatch({
    //   type: ADD_CATEGORY,
    //   payload: {},
    // });
  } catch (error) {}
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
