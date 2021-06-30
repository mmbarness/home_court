import { connect } from "react-redux";
import EventMap from "./event_map";
import { openModal, closeModal } from "../../actions/modal_actions";
import { receiveMapBounds, receiveCurrentLocation } from "../../actions/map_actions";

const mSTP = (state) => ({
  events: state.events,
  currentUser: state.session.user,
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  receiveMapBounds: (mapBounds) => dispatch(receiveMapBounds(mapBounds)),
  receiveCurrentLocation: (currentLocation) => dispatch(receiveCurrentLocation(currentLocation)),
});

export default connect(mSTP, mDTP)(EventMap);