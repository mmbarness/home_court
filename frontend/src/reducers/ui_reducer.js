import { combineReducers } from "redux";
import modalReducer from "../reducers/modal_reducer";
import mapReducer from "./map_reducer";

export default combineReducers({
  modal: modalReducer,
  map: mapReducer,
});
