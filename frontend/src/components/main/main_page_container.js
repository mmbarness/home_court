import { connect } from "react-redux";
import { fetchEvents, fetchUserEvents } from "../../actions/event_actions";
import MainPage from "./main_page";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  events: state.events,
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
