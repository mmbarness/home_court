import React from "react";
import EventCard from "./event_card";

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
          <EventCard key={i} event={event} />
        ))}
      </div>
    );
  }
}

export default EventsIndex;
