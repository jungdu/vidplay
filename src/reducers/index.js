import { combineReducers } from "redux";
import vidReducer from "./vidReducer";

export default combineReducers({
  vid: vidReducer
});
