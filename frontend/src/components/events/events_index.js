import React from "react";
import EventCard from "./event_card";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        this is the events index
        {/* {this.props.events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))} */}
      </div>
    );
  }
}

export default EventsIndex;
