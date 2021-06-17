import React from "react";
import { formatDateTime } from "../../util/date_util_short";

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
        <div className="event-item-content" onClick={this.openEventModal}>
          <h1>
            <button className="event-item-title">{event.title}</button>
          </h1>
          <h1 className="event-item-sport">{event.sport}</h1>
          <div>
            <p>{formatDateTime(this.props.event.startDate)}</p>
          </div>
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
