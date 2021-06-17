import { connect } from "react-redux";
import EventMap from "./event_map";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = (state) => ({});

const maDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, maDTP)(EventMap);
