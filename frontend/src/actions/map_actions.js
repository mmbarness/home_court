import * as APIUtil from "../util/session_api_util";

export const RECEIVE_MAP_BOUNDS = "RECEIVE_MAP_BOUNDS";
export const RECEIVE_USER_LOCATION = "RECEIVE_USER_LOCATION";

export const receiveMapBounds = (mapBounds) => {
  return {
    type: RECEIVE_MAP_BOUNDS,
    lat: mapBounds.lat,
    lng: mapBounds.lng
  };
};

export const receiveUserLocation = (location) => {
  
  return {
    type: RECEIVE_USER_LOCATION,
    location,
  };
};

export const fetchUserLocation = (id) => (dispatch) => {
  return APIUtil.getUserLocation(id).then((location) =>
    dispatch(receiveUserLocation(location))
  );
};

