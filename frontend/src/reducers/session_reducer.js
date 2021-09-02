import { REMOVE_EVENT_FROM_USER_SESSION } from "../actions/event_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER_EVENTS,
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function sessionReducer (state = initialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };
    case RECEIVE_USER_EVENTS:
      nextState.user.events = action.events;
      return nextState;
    case REMOVE_EVENT_FROM_USER_SESSION: 
      // debugger;
      let users_events = nextState.user.events.data.filter(event => event !== null)
      const event_id = action.event.event_id
      let event = users_events.filter( event => event._id === event_id)
      let filteredNextStateEvents = users_events.filter( event => event._id !== event_id)
      nextState.user.events.data = filteredNextStateEvents
      return nextState
    default:
      return state;
  }
}
