import React from "react";
import { formatDateTime } from "../../util/date_util_short";
import JoinOrNot from "./joinOrNot"
import { displaySportWithEmoji } from "../../util/sport_emoji";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import {Event} from './eventTypes'

interface EventIndexItemProps {
  center?:{
    lat: number;
    lng: number;
  };
  event: Event
}

export const EventIndexItem = (props: EventIndexItemProps) => {

  const dispatch = useDispatch()

  

  const openEventModal = () => {
    const startLocation = {
      'lat': parseFloat(props.event.lat.$numberDecimal),
      'lng': parseFloat(props.event.lng.$numberDecimal)
    }
    dispatch(openModal({
      modal: "event-show",
      data: {
        startLocation,
        event: props.event,
      }}
    ))
  }

  const renderEvent = () => {
    const {event} = props;
    if ((event !== null) && (event.visible)){
      return (
        <li className="event-index-item" onClick={() => (openEventModal())}>
          <div className="event-item-content">
            <div className="event-item-header">
              <h1 className="event-item-title">{event.title}</h1>
              <h2 className="event-item-sport">
                {displaySportWithEmoji(event.sport)}
              </h2>
            </div>
            <p className="event-item-date">
              {formatDateTime(event.startDate)}
            </p>
            <div></div>
          </div>
          <div className="event-item-footer">
              <JoinOrNot event={event}/>
          </div>
        </li>
      );
    } else {
      return (<div></div>)
    }
  }

  return(renderEvent())
}

export default EventIndexItem;
