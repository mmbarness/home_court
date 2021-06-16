import { connect } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import MainPage from "./main_page";

const mapStateToProps = (state) => ({
  events: state.events,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
