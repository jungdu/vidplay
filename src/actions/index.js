import axios from "../apis/vid";
import { FETCH_VIDS, SELECT_VID } from "./types";

export const fetchVids = () => async dispatch => {
  const response = await axios.get("/videos");
  console.log(response.data);
  dispatch({ type: FETCH_VIDS, payload: response.data });
};

export const selectVid = filename => {
  return { type: SELECT_VID, payload: filename };
};
