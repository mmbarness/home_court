import { connect } from "react-redux";
import EventShow from "./eventShow";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  event: state.ui.modal.data.event,
  startLocation: state.ui.modal.data.startLocation,
  currentUser: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
