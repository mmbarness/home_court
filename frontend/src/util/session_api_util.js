import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const getUserEvents = (id) => {
  return (axios.get(`/api/events/user/${id}/eventList`));
};

export const getUserLocation = (id) => {
  let response = axios.get(`/api/users/${id}/coordinates`);
  return response
};
