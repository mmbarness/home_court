import React, { useEffect } from "react";
import EventIndexItemContainer from "./event_index_item_container";
import { findEventsInMapBounds } from "../../util/map_util";
import {Attendee, Event} from './eventTypes'

interface EventsIndexProps {
  center?:{
    lat: number;
    lng: number;
  };
  currentUser?:{
    exp: number;
    iat: number;
    id: string;
    username: string;
  };
  events:{
   all: Event[]
    };
  fetchEvents?: any;
  fetchUserEvents?: any;
  mapBounds?: any;
}

export const EventsIndex = (props: EventsIndexProps) => {

  useEffect(() => (props.fetchEvents()), [])

  const eventsRender = () => {
    if (Object.keys(props.events.all).length === 0 || Object.keys(props.mapBounds).length === 0) {
      return null;
    } else {      
      const allEvents: any= findEventsInMapBounds(props.events.all, props.mapBounds)
      return (
        <div className="event-index">
          <h1>Find a Game Near You</h1>
          <ul className="event-index-ul">
            {allEvents.eventsArr.map((event :Event, i :number) =>{ 
              return(<EventIndexItemContainer
                key={i} 
                center={props.center}
                event={event}
              />)
            })}
          </ul>
        </div>
      );
    }
  }

  return(eventsRender())
}

export default EventsIndex;
