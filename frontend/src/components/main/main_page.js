import React from "react";
import EventMap from "../map/event_map";
import EventsIndex from "../events/events_index.jsx";
import "../../style/css/main_page.css";
import "../../style/css/events.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <section className="main-page-events">
          <EventsIndex
            events={this.props.events}
            fetchEvents={this.props.fetchEvents}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            fetchUserEvents={this.props.fetchUserEvents}
          />
        </section>
        <section className="main-page-map">
          <EventMap />
        </section>
      </div>
    );
  }
}

export default MainPage;
