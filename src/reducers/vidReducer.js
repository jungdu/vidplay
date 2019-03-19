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
  console.log(action);
  const playing = getSource(action.payload);
  return {
    ...state,
    selectedfile: action.payload,
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
