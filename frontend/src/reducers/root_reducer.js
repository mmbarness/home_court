import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import events from "./events_reducer";

const RootReducer = combineReducers({
  events,
  errors,
  session,
  ui,
});

export default RootReducer;
