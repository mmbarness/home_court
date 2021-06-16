import { connect } from "react-redux";
import EventShow from "./event_show";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow);
