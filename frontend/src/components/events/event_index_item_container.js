import { connect } from "react-redux";
import EventIndexItem from "./event_index_item.jsx";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexItem);
