import EventForm from './event_form'
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return {
    // errors: state.errors.events,
    location: state.ui.modal.data
  };
};

const mDTP = (dispatch) => {
  return {
    createEvent: event => dispatch(createEvent(event)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mSTP, mDTP)(EventForm);