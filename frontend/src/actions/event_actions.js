import * as APIUtil from "../util/event_api_util";

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const REMOVE_EVENT_FROM_USER_SESSION = "REMOVE_EVENT_FROM_USER_SESSION"

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

export const removeEvent = (event) => {
  return {
    type: REMOVE_EVENT,
    event,
  };
};

export const removeEventFromUserSession = (event) => (
  {
    type: REMOVE_EVENT_FROM_USER_SESSION,
    event
  }
)

export const receiveEventErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors,
  };
};

export const receiveNewEvent = (event) => {return({
  type: RECEIVE_NEW_EVENT,
  event,
})};

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
    .catch((err) => {return(dispatch(receiveEventErrors(err)))});
};

export const unJoinEvent = (data) => (dispatch) => {
  return APIUtil.unJoinEvent(data)
    .then((event) => {
      dispatch(receiveEvent(event))
      dispatch(removeEventFromUserSession(data))
    })
    .catch((err) => {dispatch(receiveEventErrors(err))});
};

export const deleteEvent = (eventId) => async (dispatch) => {
  let deletedEvent = await APIUtil.deleteEvent(eventId)
  dispatch(removeEvent(deletedEvent))
};

export const joinEvent = (eventId, data) => (dispatch) => {
  return APIUtil.joinEvent(eventId, data).then((event) =>{
    return(dispatch(receiveEvent(event)))}
  );
};
