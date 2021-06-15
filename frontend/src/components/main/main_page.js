import React from "react";
import EventMap from "../map/event_map";
import EventsIndex from "../events/events_index";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <section className="main-page-events">
          <EventsIndex />
        </section>
        <section className="main-page-map">
          <EventMap />
        </section>
      </div>
    );
  }
}

export default MainPage;
