import React from "react";
import { formatDateTime } from "../../util/date_util_short";
import * as _ from "underscore";
import JoinOrNot from "./joinOrNot";
import { displaySportWithEmoji } from "../../util/sport_emoji";


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openEventModal = this.openEventModal.bind(this);
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      data: this.props.event,
    });
  }

  render() {
    const { event } = this.props;
    return (
      <li className="event-index-item">
        <div className="event-item-content" onClick={this.openEventModal}>
          <h1 className="event-item-header">
            <h1 className="event-item-title">{event.title}</h1>
            <h2 className="event-item-sport">
              {displaySportWithEmoji(event.sport)}
            </h2>
          </h1>
          <p className="event-item-date">
            {formatDateTime(this.props.event.startDate)}
          </p>
          <div></div>
        </div>
        <div className="event-item-footer">
            <JoinOrNot event={event}/>
        </div>
      </li>
    );
  }
}

export default EventIndexItem;
