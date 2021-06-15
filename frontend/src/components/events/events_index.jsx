import React from "react";
import EventIndexItem from "./event_index_item";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const eventsArr = Object.values(this.props.events);

    return (
      <div>
        <h1>Find a Game Near You</h1>
        {eventsArr.map((event, i) => (
          <EventIndexItem key={i} event={event} />
        ))}
      </div>
    );
  }
}

export default EventsIndex;
