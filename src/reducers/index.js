import { combineReducers } from "redux";
import vidReducer from "./vidReducer";
import layoutReducer from "./layoutReducer";

export default combineReducers({
  vid: vidReducer,
  layout: layoutReducer
});
