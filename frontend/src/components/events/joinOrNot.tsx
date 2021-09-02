import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as _ from "underscore";
import { joinEvent, unJoinEvent } from "../../actions/event_actions";
import {Attendee} from './eventTypes'

interface JoinOrNotProps {
  event: {  
    attendees: Attendee[]
    dateCreated: string
    description: string
    endDate: string
    lat: {$numberDecimal: string}
    lng: {$numberDecimal: string}
    postedBy: string
    sport: string
    startDate: string
    title: string
    visible: boolean
    __v: number,
    _id: number
  }
}

export const JoinOrNot = (props :JoinOrNotProps) => {
  const event = props.event;
  const attendees = props.event.attendees;
  const currentUser = useSelector((state: RootStateOrAny) => state.session.user);
  let postedByName :string;
  !_.isEmpty(event.attendees)
    ? (postedByName = event.attendees[0].username)
    : (postedByName = "");
  const dispatch = useDispatch();

  const joinedOrNot = () => {
    let bool :boolean = false;
    if (!_.isEmpty(attendees)) {
      bool = attendees.some((user :any) => user.username === currentUser.username)
        ? true
        : false;
    }
    return bool;
  };

  const [joined, setjoined] = useState(joinedOrNot());

  const joinEventButton = () => {
    return (
      <button
        className="join-event event-item-button"
        onClick={(e) => {
          setjoined(!joined);
          dispatch(joinEvent(event._id, currentUser));
        }}
      >
        Join Game
      </button>
    );
  };

  const unJoin = () => {
    let obj = { user_id: currentUser.id, event_id: event._id };
    setjoined(!joined);
    dispatch(unJoinEvent(obj));
  };

  const unjoinEventButton = () => {
    if (currentUser.username !== postedByName) {
      return (
        <button onClick={() => unJoin()} className="unjoin-event event-item-button">
          ✔ Attending
        </button>
      );
    } else {
      return <h3 className="your-event">This is your event!</h3>;
    }
  };
  return joined ? unjoinEventButton() : joinEventButton();
};

export default JoinOrNot;
