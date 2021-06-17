import React from "react";
import EventIndexItemContainer from "./event_index_item_container";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (this.props.events.all === undefined) return null;
    // debugger;
    const allEventsArr = Object.values(this.props.events.all);

    return (
      <div>
        <div className="user-events">
          <h1>My Games</h1>
          <div>
            {/* my events
            {userEventsArr.map((event, i) => (
              <EventIndexItem key={i} event={event} />
            ))} */}
          </div>
        </div>
        <div className="all">
          <h1>Find a Game Near You</h1>
          <div>
            {allEventsArr.map((event, i) => (
              <EventIndexItemContainer key={i} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EventsIndex;
