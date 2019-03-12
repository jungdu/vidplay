import { OPEN_LIST, CLOSE_LIST } from "../actions/types";

const initialState = {
  isListOpen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LIST:
      return {
        ...state,
        isListOpen: true
      };
    case CLOSE_LIST:
      return {
        ...state,
        isListOpen: false
      };
    default:
      return state;
  }
};
