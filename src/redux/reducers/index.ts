import { combineReducers } from "redux";
import markerReducer from "./markerReducer";

export default combineReducers({
   data: markerReducer
});
