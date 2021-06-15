import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
