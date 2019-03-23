import { FETCH_VIDS, SELECT_VID } from "../actions/types";
import { bucketUrl } from "../config";

export const initialState = {
  vidList: [],
  playing: null,
  selectedFile: null,
};

const fetchVids = (state, action) => {
  return {
    ...state,
    vidList: [...action.payload],
  };
};

export const getSource = video => {
  return video ? bucketUrl +'video/'+ video : null;
};

const selectVid = (state, action) => {
  const selectedFile = action.payload ? action.payload : null;
  const playing = getSource(selectedFile);
  return {
    ...state,
    selectedFile,
    playing,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDS:
      return fetchVids(state, action);
    case SELECT_VID:
      return selectVid(state, action);
    default:
      return state;
  }
};
