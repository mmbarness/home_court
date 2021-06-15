import React from "react";
import EventsIndex from "../events/events_index";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <section className="main-page-events">
          <EventsIndex />
        </section>
        <section className="main-page-map"> google map goes here</section>
      </div>
    );
  }
}

export default MainPage;
