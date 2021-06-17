import React from "react";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openEventModal = this.openEventModal.bind(this);
    this.joinEventButton = this.joinEventButton.bind(this);
    this.unjoinEventButton = this.unjoinEventButton.bind(this);
    this.joinedOrNot = this.joinedOrNot.bind(this);
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      data: this.props.event,
    });
  }

  joinedOrNot() {
    // this.props.event.attendees.some((attendee) => {
    //   // attendees.username !== undefined ||
    //   attendee.username === this.props.currentUser.username;
    // });
  }

  joinEventButton() {
    return (
      <button
        className="join-event event-item-button"
        onClick={() =>
          this.props.joinEvent(this.props.event._id, this.props.currentUser)
        }
      >
        Join Game
      </button>
    );
  }

  unjoinEventButton() {
    return (
      <button className="unjoin-event event-item-button">Attending</button>
    );
  }

  render() {
    const { event } = this.props;

    return (
      <li className="event-index-item">
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
        <div className="event-item-footer">
          {this.joinedOrNot()
            ? this.unjoinEventButton()
            : this.joinEventButton()}
        </div>
      </li>
    );
  }
}

export default EventIndexItem;
