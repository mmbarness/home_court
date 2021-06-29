import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "underscore";
import { joinEvent, unJoinEvent } from "../../actions/event_actions";

export const JoinOrNot = (props) => {
  const event = props.event;
  const attendees = props.event.attendees;
  const currentUser = useSelector((state) => state.session.user);
  let postedByName;
  !_.isEmpty(event.attendees)
    ? (postedByName = event.attendees[0].username)
    : (postedByName = null);
  const dispatch = useDispatch();

  const joinedOrNot = () => {
    let bool;
    if (!_.isEmpty(attendees)) {
      bool = attendees.some((user) => user.username === currentUser.username)
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
        onClick={() => {
          setjoined(!joined);
          dispatch(joinEvent(event._id, currentUser));
        }}
      >
        Join Game
      </button>
    );
  };

  const unJoin = (e) => {
    e.preventDefault();
    let obj = { user_id: currentUser.id, event_id: event._id };
    setjoined(!joined);
    unJoinEvent(obj);
  };

  const unjoinEventButton = () => {
    if (currentUser.username !== postedByName) {
      return (
        <button onClick={unJoin} className="unjoin-event event-item-button">
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
