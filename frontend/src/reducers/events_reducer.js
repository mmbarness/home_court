import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  REMOVE_EVENT,
} from "../actions/event_actions";

const eventsReducer = (state = { all: {}}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      action.events.data.map((event) => (nextState.all[event._id] = event));
      return nextState;
    case RECEIVE_EVENT:
      nextState.all[action.event.data._id] = action.event.data;
      return nextState;
    case REMOVE_EVENT:
      delete nextState.all[action.event.data._id];
      return nextState;
    default:
      return state;
  }
};

export default eventsReducer;
