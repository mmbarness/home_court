import { connect } from "react-redux";
import EventIndexItem from "./event_index_item.jsx";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchEvents, joinEvent } from "../../actions/event_actions";
import { unJoinEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  unJoinEvent: (data) => dispatch(unJoinEvent(data)),
  joinEvent: (eventId, data) => dispatch(joinEvent(eventId, data)),
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);
