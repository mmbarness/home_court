import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  REMOVE_EVENT,
} from "../actions/event_actions";

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, action.events.data);
    case RECEIVE_EVENT:
      return state;
    // return Object.assign({}, action.event.data)
    case REMOVE_EVENT:
      delete nextState[action.eventId];
      return nextState;
    default:
      return state;
  }
};

export default eventsReducer;
