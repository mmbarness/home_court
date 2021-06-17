import React from "react";
import { MdClose } from "react-icons/md";

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attending: false,
    };
    this.openEventModal = this.openEventModal.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      data: this.props.event,
    });
  }

  joinEvent() {
    this.props.updateEvent({ attendees: this.props.currentUser });
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event-modal-container">
        <div className="login-form-box">
          <div>
            <div onClick={this.props.closeModal} className="close-x">
              <MdClose size={28} />
            </div>

          </div>

          <h1 className="login-form-header">{event.title}</h1>
          <h1>{event.sport}</h1>
          <p>Number of attendees: {event.attendees.length}</p>
          <div>
            <h3>Description:</h3>
            <p>{event.description}</p>
          </div>
          <button onClick={this.joinEvent}>Join this event</button>
        </div>
      </div>
    );
  }
}

export default EventShow;
