import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../actions/event_actions";
import { closeModal } from "../../actions/modal_actions";
import {Event} from './eventTypes'

interface DeleteEventProps {
  event: Event
}

export const DeleteEvent = (props: DeleteEventProps) => {
  let currentUser = useSelector((state: RootStateOrAny) => state.session.user);
  let event = props.event;
  let postedByName = (event.attendees) ? event.attendees[0].username : 'unknown' 
  let eventId = event._id!

  const dispatch = useDispatch();

  const localDeleteEvent = async (e: MouseEvent) => {
      e.preventDefault();
      await dispatch(deleteEvent(eventId.toString()))
      await (dispatch(closeModal()))
  }

  if (postedByName === currentUser.username) {
    return (
      <button
        className="event-item-button"
        id="delete-event-button"
        onClick={() => localDeleteEvent}
      >
        Delete Event
      </button>
    );
  } else {
    return <div></div>;
  }
};

export default DeleteEvent;
