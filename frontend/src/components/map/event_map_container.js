import { connect } from "react-redux";
import EventMap from "./event_map";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  events: state.events,
  currentUser: state.session.user,
});

const maDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, maDTP)(EventMap);