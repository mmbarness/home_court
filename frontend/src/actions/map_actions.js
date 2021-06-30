export const RECEIVE_MAP_BOUNDS = "RECEIVE_MAP_BOUNDS";
export const RECEIVE_CURRENT_LOCATION = "RECEIVE_CURRENT_LOCATION";

export const receiveMapBounds = (mapBounds) => {
  return {
    type: RECEIVE_MAP_BOUNDS,
    lat: mapBounds.lat,
    lng: mapBounds.lng
  };
};

export const receiveCurrentLocation = (currentLocation) => {
  return {
    type: RECEIVE_CURRENT_LOCATION,
    currentLocation,
  };
};

