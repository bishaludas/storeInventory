import axios from "axios";
import {
  GET_CATEGORY,
  CATEGORY_ERROR,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
} from "./types";

export const getCategory = () => async (dispatch) => {
  try {
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
    const res = await axios.post(
      "http://127.0.0.1:8001/api/categories",
      input,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      }
    );
    const data = res.data;
    dispatch({
      type: ADD_CATEGORY,
      payload: {
        categories: data.apidata,
      },
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setCurrentCat = (data) => {
  return {
    type: "SET_CURRENT",
    payload: data,
  };
};

export const EditCategory = (input) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://127.0.0.1:8001/api/categories/${input.id}/update`,
      input,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      }
    );

    const data = res.data;
    console.log(data);
    dispatch({
      type: UPDATE_CATEGORY,
      payload: input,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CATEGORY_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const DeleteCategory = (input) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8001/api/categories/delete",
      input,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      }
    );
    const data = res.data;
    dispatch({
      type: DELETE_CATEGORY,
      payload: {
        message: data.message + `count : ${data.apidata}`,
        id: input.id,
      },
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err.response.statusText,
    });
  }
};
