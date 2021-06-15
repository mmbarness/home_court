import * as APIUtil from "../util/event_api_util";

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT_ERRORS = "REMOVE_EVENT";
// export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";

export const receiveEvents = (events) => {
  return {
    type: RECEIVE_ALL_EVENTS,
    events,
  };
};

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event,
  };
};

export const receieveEventErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors,
  };
};

// export const receiveNewEvent = event => ({
//   type: RECEIVE_NEW_EVENT,
//   event
// })

export const fetchEvents = () => (dispatch) => {
  return APIUtil.getEvents().then((events) => dispatch(receiveEvents(events)));
};

export const fetchEvent = (eventId) => (dispatch) => {
  return APIUtil.getEvent(eventId).then((event) =>
    dispatch(receiveEvent(event))
  );
};

export const createEvent = (data) => (dispatch) => {
  return APIUtil.createEvent(data)
    .then((event) => dispatch(receiveEvent(event)))
    .catch((err) => dispatch(receieveEventErrors(err.response.data)));
};

export const updateEvent = (data) => (dispatch) => {
  return APIUtil.updateEvent(data)
    .then((event) => dispatch(receiveEvent(event)))
    .catch((err) => dispatch(receieveEventErrors(err.response.data)));
};

export const deleteEvent = (eventId) => (dispatch) => {
  return APIUtil.deleteEvent(eventId).then((event) =>
    dispatch(removeEvent(event))
  );
};
