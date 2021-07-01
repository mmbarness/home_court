import { connect } from "react-redux";
import { fetchEvents} from "../../actions/event_actions";
import MainPage from "./main_page";
import { openModal } from "../../actions/modal_actions";
import { fetchUserEvents } from "../../actions/session_actions";
import {fetchUserLocation } from "../../actions/map_actions";

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.session.user,
  mapBounds: state.ui.map.mapBounds,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchUserLocation: (id) => dispatch(fetchUserLocation(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
