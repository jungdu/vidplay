import { FETCH_VIDS, SELECT_VID } from "../actions/types";

const initialState = {
  vidList: [],
  playing: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDS:
      return {
        ...state,
        vidList: [...action.payload.files]
      };
    case SELECT_VID:
      return {
        ...state,
        playing: action.payload
      };
    default:
      return state;
  }
};
