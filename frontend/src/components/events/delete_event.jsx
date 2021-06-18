import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../actions/event_actions";
import { closeModal } from "../../actions/modal_actions";

export const DeleteEvent = (props) => {
  let loggedIn = useSelector((state) => state.session.isAuthenticated);
  let currentUser = useSelector((state) => state.session.user);
  let event = props.event;
  let postedByName = event.attendees[0].username;

  const dispatch = useDispatch();

  const localDeleteEvent = (e) => {
      e.preventDefault();
      dispatch(deleteEvent(event._id.toString())).then(dispatch(closeModal()))
  }

  if (postedByName === currentUser.username) {
    return (
      <button
        className="event-item-button"
        id="delete-event-button"
        onClick={localDeleteEvent}
      >
        Delete Event
      </button>
    );
  } else {
    return <div></div>;
  }
};

export default DeleteEvent;
