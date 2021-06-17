import React from "react";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attending: false,
    };
    this.openEventModal = this.openEventModal.bind(this);
    this.joinEventButton = this.joinEventButton.bind(this);
    this.unjoinEvent = this.unjoinEvent.bind(this);
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      event: this.props.event,
    });
  }

  joinEventButton() {
    return (
      <button
        onClick={() =>
          this.props.joinEvent(this.props.event._id, this.props.currentUser)
        }
      >
        Join game button
      </button>
    );
  }

  unjoinEvent() {
    return <button>Attending</button>;
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
        {this.joinEventButton()}
      </div>
    );
  }
}

export default EventIndexItem;
