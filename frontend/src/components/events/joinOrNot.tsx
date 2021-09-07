import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as _ from "underscore";
import { joinEvent, unJoinEvent } from "../../actions/event_actions";
import {Attendee, Event} from './eventTypes'

interface JoinOrNotProps {
  event: Event
}

export const JoinOrNot = (props: JoinOrNotProps) => {
  const event = props.event;
  const currentUser = useSelector((state: RootStateOrAny) => state.session.user);
  const dispatch = useDispatch();
  let postedByName :string;
  let attendees = event.attendees!
  if (!_.isEmpty(attendees)){
      if (attendees.length > 1){
        postedByName = attendees[0].username
      }
    } else {
      (postedByName = "");
    }

  const joinedOrNot = () => {
    let bool :boolean = false;
    bool = attendees.some((user :any) => user.username === currentUser.username) 
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
