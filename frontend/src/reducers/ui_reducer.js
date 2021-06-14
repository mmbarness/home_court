import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import modalReducer from "../reducers/modal_reducer";

export default combineReducers({
  modal: modalReducer,
});
