import React from "react";
import EventIndexItemContainer from "./event_index_item_container";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (this.props.events.all === undefined) return null;
    const allEventsArr = Object.values(this.props.events.all);

    return (
      <div className="event-index">
        <h1>Find a Game Near You</h1>
        <ul>
          {allEventsArr.map((event, i) => (
            <EventIndexItemContainer key={i} event={event} />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventsIndex;
