import React from "react";
import EventIndexItemContainer from "./event_index_item_container";
import { findEventsInMapBounds } from "../../util/map_util";

class EventsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {    
      if (Object.keys(this.props.events.all).length === 0 || Object.keys(this.props.mapBounds).length === 0) {
        return null;
      } else {      
        const eventsArr = findEventsInMapBounds(this.props.events.all, this.props.mapBounds)

        return (
          <div className="event-index">
            <h1>Find a Game Near You</h1>
            <ul className="event-index-ul">
              {eventsArr.map((event, i) => (
                <EventIndexItemContainer
                  key={i} 
                  center={this.props.center}
                  event={event}
                />
              ))}
            </ul>
          </div>
        );
      }
    }

}

export default EventsIndex;
