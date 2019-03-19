import axios from "../apis/vid";
import { FETCH_VIDS, SELECT_VID, OPEN_LIST, CLOSE_LIST } from "./types";

export const fetchVids = () => async dispatch => {
  const response = await axios.get("/videos");
  dispatch({ type: FETCH_VIDS, payload: response.data.videos });
};

export const selectVid = video => {
  return { type: SELECT_VID, payload: video };
};

export const openList = () => {
  return { type: OPEN_LIST };
};

export const closeList = () => {
  return { type: CLOSE_LIST };
};
