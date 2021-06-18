import React from "react";
import EventMapContainer from "../map/event_map_container";
import EventsIndex from "../events/events_index.jsx";
import "../../style/css/main_page.css";
import "../../style/css/events.css";

let center;

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 40.7299653, 
        lng: -73.9157633, 
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState({center: center})
    }, () => (null));
  }
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
          <EventMapContainer
          center={this.state.center}/>
        </section>
      </div>
    );
  }
}

export default MainPage;

