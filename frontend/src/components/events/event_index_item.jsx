import React from "react";
import { formatDateTime } from "../../util/date_util_short";
import * as _ from "underscore";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openEventModal = this.openEventModal.bind(this);
    this.joinEventButton = this.joinEventButton.bind(this);
    this.unjoinEventButton = this.unjoinEventButton.bind(this);
    this.joinedOrNot = this.joinedOrNot.bind(this);
    this.displaySportWithEmoji = this.displaySportWithEmoji.bind(this);
    this.state = {
      clicked: this.joinedOrNot(),
    };
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      data: this.props.event,
    });
  }

  joinedOrNot() {
    let attendees = this.props.event.attendees;
    let curUser = this.props.currentUser;
    let bool;
    if (!_.isEmpty(attendees)) {
      bool = attendees.some((user) => user.username === curUser.username)
        ? true
        : false;
    }
    return bool;
  }

  joinEventButton() {
    return (
      <button
        className="join-event event-item-button"
        onClick={() => {
          this.setState({ clicked: !this.state.clicked });
          this.props.joinEvent(this.props.event._id, this.props.currentUser);
        }}
      >
        Join Game
      </button>
    );
  }

  unjoinEventButton() {
    return (
      <button className="unjoin-event event-item-button">✔ Attending</button>
    );
  }

  displaySportWithEmoji() {
    switch (this.props.event.sport) {
      case "Basketball":
        return "Basketball 🏀";
      case "Volleyball":
        return "Volleyball 🏐";
      case "Football":
        return "Football 🏈";
      case "Soccer":
        return "Soccer ⚽️";
      case "Spikeball":
        return "Spikeball 🤾‍♂️";
      default:
        return null;
    }
  }

  render() {
    const { event } = this.props;
    return (
      <li className="event-index-item">
        <div className="event-item-content" onClick={this.openEventModal}>
          <h1 className="event-item-header">
            <h1 className="event-item-title">{event.title}</h1>
            <h2 className="event-item-sport">{this.displaySportWithEmoji()}</h2>
          </h1>
          <p className="event-item-date">
            {formatDateTime(this.props.event.startDate)}
          </p>
          <div></div>
        </div>
        <div className="event-item-footer">
          {this.state.clicked
            ? this.unjoinEventButton()
            : this.joinEventButton()}
        </div>
      </li>
    );
  }
}

export default EventIndexItem;
