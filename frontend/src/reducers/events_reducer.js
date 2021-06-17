import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  REMOVE_EVENT,
  RECEIVE_USER_EVENTS,
} from "../actions/event_actions";

const eventsReducer = (state = { all: {}, user: {} }, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      action.events.data.map((event) => (nextState.all[event._id] = event));
      return nextState;
    case RECEIVE_EVENT:
      debugger;
      return (nextState[action.event.data._id] = action.event.data);
    case RECEIVE_USER_EVENTS:
      nextState.user = action.events.data;
      return nextState;
    case REMOVE_EVENT:
      delete nextState.all[action.eventId];
      return nextState;
    default:
      return state;
  }
};

export default eventsReducer;
