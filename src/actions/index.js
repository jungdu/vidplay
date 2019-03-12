import axios from "../apis/vid";
import { FETCH_VIDS, SELECT_VID, OPEN_LIST, CLOSE_LIST } from "./types";

export const fetchVids = () => async dispatch => {
  const response = await axios.get("/videos");
  console.log(response.data);
  dispatch({ type: FETCH_VIDS, payload: response.data });
};

export const selectVid = filename => {
  return { type: SELECT_VID, payload: filename };
};

export const openList = () => {
  return { type: OPEN_LIST };
};

export const closeList = () => {
  return { type: CLOSE_LIST };
};
