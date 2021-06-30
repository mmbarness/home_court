import { connect } from "react-redux";
import { fetchEvents} from "../../actions/event_actions";
import MainPage from "./main_page";
import { openModal } from "../../actions/modal_actions";
import { fetchUserEvents } from "../../actions/session_actions";
import {receiveCurrentLocation } from "../../actions/map_actions";

const mapStateToProps = (state) => ({
  events: state.events,
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  receiveCurrentLocation: (currentLocation) => dispatch(receiveCurrentLocation(currentLocation)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
