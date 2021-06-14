import { combineReducers } from "redux";
import modalReducer from "../reducers/modal_reducer";

export default combineReducers({
  modal: modalReducer,
});
