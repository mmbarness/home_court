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

export const updateEvent = (data) => {
  return axios.patch("/api/events", data);
};

export const deleteEvent = (eventId) => {
  return axios.delete(`api/events/${eventId}`);
};

export const joinEvent = (eventId, user) => {
  return axios.patch(
    // `http://localhost:5000/api/events/${eventId}/add_attendee`,
    `api/events/${eventId}/add_attendee`,
    user
  );
};
