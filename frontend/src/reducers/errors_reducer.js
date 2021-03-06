import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import eventErrorReducer from "./event_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  events: eventErrorReducer,
});
