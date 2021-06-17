import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';

class EventFormModal extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      sport: '',
      description: '',
      startDate: '',
      endDate: '',
      lat: this.props.eventLocation.lat,
      lng: this.props.eventLocation.lng,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.updateAddress = this.updateAddress.bind(this);
  }
  return (

    <div className="modal-child" onClick={(e) => e.stopPropagation()}>
      {component}
    </div>
  );
}

const mSTP = (state) => {
  return {
    errors: state.errors.session
  };
};

const mDTP = (dispatch) => {
  return {
    createEvent: event => dispatch(createEvent(event))
  }
}

export default connect(mSTP, mDTP)(EventFormModal);