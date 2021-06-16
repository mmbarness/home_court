import React from "react";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attending: false,
    };
    this.openEventModal = this.openEventModal.bind(this);
    this.joinEvent = this.joinEvent.bind(this);
  }

  openEventModal() {
    this.props.openModal("event-show");
  }

  joinEvent() {
    this.props.updateEvent({ attendees: this.props.currentUser });
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event-index-item">
        <h1>
          <button
            className="event-index-item-title"
            onClick={this.openEventModal}
          >
            {event.title}
          </button>
        </h1>
        <h1>{event.sport}</h1>
        <p>Number of attendees: {event.attendees.length}</p>
        <div>
          <h3>Description:</h3>
          <p>{event.description}</p>
        </div>
        <button onClick={this.joinEvent}>Join this event</button>
      </div>
    );
  }
}

export default EventIndexItem;
