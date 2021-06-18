import React from 'react';
import { useSelector } from 'react-redux';
import { deleteEvent } from '../../actions/event_actions';


export const DeleteEvent = (props) => {
    let loggedIn = useSelector((state) => state.session.isAuthenticated);
    let currentUser = useSelector((state) => state.session.user);
    let event = props.event;
    let postedByName = event.attendees[0].username;

    if (postedByName === currentUser.username) {
    return (
        <button id="delete-event-button" onClick={deleteEvent(event._id.toString())}>Delete Event</button>
    ) 
    } else{
        return(<div></div>)
    }

}

export default DeleteEvent; 