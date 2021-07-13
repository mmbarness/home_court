import { RECEIVE_EVENT_ERRORS, RECEIVE_EVENT } from "../actions/event_actions";

const _nullErrors = {};

const eventErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      const error = {[action.errors.response.status]: action.errors.response.data.title}
      return action.errors
    case RECEIVE_EVENT:
      return _nullErrors;
    default:
      return state;
  }
};

export default eventErrorsReducer;
