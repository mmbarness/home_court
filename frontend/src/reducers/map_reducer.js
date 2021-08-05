import { RECEIVE_MAP_BOUNDS, RECEIVE_USER_LOCATION } from "../actions/map_actions";

const initialState = { mapBounds: {}, userLocation: {} }

export default function mapReducer(state = initialState, action) {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_MAP_BOUNDS:
        nextState.mapBounds = {lat: action.lat, lng: action.lng};
        return nextState;
    case RECEIVE_USER_LOCATION:
        nextState.userLocation = action.location;
        return nextState;
    default:
      return state;
  }
}