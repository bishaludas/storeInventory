import axios from "axios";
import {
  SET_LOADING,
  GET_ITEMS,
  // ADD_ITEM,
  // UPDATE_ITEM,
  // DELETE_ITEM,
  // SHOW_ITEM,
  ITEMS_ERROR,
} from "./types";

// get items from server
export const getItems = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("http://127.0.0.1:8001/api/items");
    const data = res.data.apidata;

    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ITEMS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
