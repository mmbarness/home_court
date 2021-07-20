import React from "react";
import { formatDateTime } from "../../util/date_util_short";
import JoinOrNot from "./joinOrNot";
import { displaySportWithEmoji } from "../../util/sport_emoji";


class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openEventModal = this.openEventModal.bind(this);
    // this.joinEventButton = this.joinEventButton.bind(this);
    // this.unjoinEventButton = this.unjoinEventButton.bind(this);
    // this.joinedOrNot = this.joinedOrNot.bind(this);
    // this.unJoin = this.unJoin.bind(this);
  }

  openEventModal() {
    this.props.openModal({
      modal: "event-show",
      data: {
        startLocation: this.props.center,
        event: this.props.event,
      }
    });
  }

  // joinedOrNot() {
  //   let attendees = this.props.event.attendees;
  //   let curUser = this.props.currentUser;
  //   let bool;
  //   if (!_.isEmpty(attendees)) {
  //     bool = attendees.some((user) => user.username === curUser.username)
  //       ? true
  //       : false;
  //   }
  //   return bool;
  // }

  // joinEventButton() {
  //   return (
  //     <button
  //       className="join-event event-item-button"
  //       onClick={() => {
  //         this.setState({ clicked: !this.state.clicked });
  //         this.props.joinEvent(this.props.event._id, this.props.currentUser);
  //       }}
  //     >
  //       Join Game
  //     </button>
  //   );
  // }

  // unJoin(e){
  //   e.preventDefault();
  //   let obj = {user_id: this.props.currentUser.id, event_id: this.props.event._id}
  //   this.setState({ clicked: !this.state.clicked });
  //   this.props.unJoinEvent(obj)
  // }

  // unjoinEventButton() {
  //   return (
  //     <button onClick={this.unJoin} className="unjoin-event event-item-button">✔ Attending</button>
  //   );
  // }

  render() {
    const { event } = this.props;
    if (event !== null) {
      return (
        <li className="event-index-item">
          <div className="event-item-content" onClick={this.openEventModal}>
            <div className="event-item-header">
              <h1 className="event-item-title">{event.title}</h1>
              <h2 className="event-item-sport">
                {displaySportWithEmoji(event.sport)}
              </h2>
            </div>
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
    }else {
      return (<div></div>)
    }
  }
}

export default EventIndexItem;
