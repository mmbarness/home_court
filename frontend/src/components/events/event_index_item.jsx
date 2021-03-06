import React from "react";
import { formatDateTime } from "../../util/date_util_short";
import JoinOrNot from "./joinOrNot";
import { displaySportWithEmoji } from "../../util/sport_emoji";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openEventModal = this.openEventModal.bind(this);
  }

  openEventModal() {
    const startLocation = {
      'lat': parseFloat(this.props.event.lat.$numberDecimal),
      'lng': parseFloat(this.props.event.lng.$numberDecimal)
    }
    this.props.openModal({
      modal: "event-show",
      data: {
        startLocation,
        event: this.props.event,
      },
    });
  }

  render() {
    const { event } = this.props;
    if (event !== null && event.visible) {
      return (
        <li className="event-index-item">
          <div
            className="event-item-content"
            onClick={(e) => this.openEventModal(e)}
          >
            <div className="event-item-header">
              <h1 className="event-item-title">{event.title}</h1>
              <h2 className="event-item-sport">
                {displaySportWithEmoji(event.sport)}
              </h2>
            </div>
            <p
              className="event-item-date"
              onClick={(e) => this.openEventModal(e)}
            >
              {formatDateTime(this.props.event.startDate)}
            </p>
            {/* <div></div> */}
          </div>
          <div className="event-item-footer">
            <JoinOrNot event={event} />
            <span
              style={{ width: "60%" }}
              onClick={(e) => this.openEventModal(e)}
            ></span>
          </div>
        </li>
      );
    } else {
      return <div></div>;
    }
  }
}

export default EventIndexItem;
