import { FETCH_VIDS, SELECT_VID } from "../actions/types";
import { bucketUrl } from "../config";

const initialState = {
  vidList: [],
  playing: null,
  selectedFile: null
};

const fetchVids = (state, action) => {
  return {
    ...state,
    vidList: [...action.payload]
  };
};

const getSource = video => {
  return bucketUrl + video;
};

const selectVid = (state, action) => {
  const selectedFile = action.payload;
  const playing = getSource(selectedFile);
  return {
    ...state,
    selectedfile,
    playing
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
