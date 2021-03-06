import axios from "axios";

export const getEvents = () => {
  return axios.get("api/events");
};

export const getEvent = (eventId) => {
  return axios.get(`api/events/${eventId}`);
};

export const createEvent = (data) => {
  return axios.post("/api/events", data);
};

export const unJoinEvent = (data) => {
  return axios.patch(`/api/events/${data.event_id}/remove_attendee`, data);
};

export const deleteEvent = (eventId) => {
  return axios.delete(`api/events/${eventId}`);
};

export const joinEvent = (eventId, user) => {
  return axios.patch(
    `api/events/${eventId}/add_attendee`,
    user
  );
};
