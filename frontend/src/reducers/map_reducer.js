import { RECEIVE_MAP_BOUNDS, RECEIVE_CURRENT_LOCATION } from "../actions/map_actions";

export default function mapReducer(state = { mapBounds: {}, currentLocation: {} }, action) {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_MAP_BOUNDS:
        nextState.mapBounds = {lat: action.lat, lng: action.lng};
        return nextState;
    case RECEIVE_CURRENT_LOCATION:
        nextState.currentLocation = action.currentLocation;
        return nextState;
    default:
      return state;
  }
}