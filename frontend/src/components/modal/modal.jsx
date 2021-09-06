import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import EventShowContainer from "../events/event_show_container" 
import EventForm from "../events/event_form";
import EventFormContainer from '../events/event_form_container'

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "event-show":
      component = <EventShowContainer event={modal.event} />;
      break;
    case "event-form":
      component = <EventForm appLocation={modal.location} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);