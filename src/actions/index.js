import axios from "../apis/vid";
import { FETCH_VIDS, SELECT_VID, OPEN_LIST, CLOSE_LIST } from "./types";

export const fetchVids = () => async dispatch => {
  const response = await axios.get("/videos");
  const videos = response.data.videos.filter(elem => !/vtt$/.exec(elem));
  dispatch({ type: FETCH_VIDS, payload: videos });
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
