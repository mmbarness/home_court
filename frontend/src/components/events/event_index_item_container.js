import { connect } from "react-redux";
import EventIndexItem from "./event_index_item.jsx";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchEvents, joinEvent } from "../../actions/event_actions";
import { updateEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateEvent: (data) => dispatch(updateEvent(data)),
  joinEvent: (eventId, data) => dispatch(joinEvent(eventId, data)),
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);
