import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'
import {fetchUserEvents} from '../../actions/session_actions'
import EventIndexItemContainer from '../events/event_index_item_container';
import * as _ from 'underscore'

export const Profile = () => {

    const currentUser = useSelector((state) => state.session.user)
    const allEvents = useSelector(state => state.events)
    const userEvents = useSelector(state => state.session.user.events)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserEvents(currentUser.id))
    },[currentUser.events])

    const renderEvents = () => {
        let events = currentUser.events
        if (!_.isEmpty(events)) {
            return (<div>
                {events.data.map((event, i) => (
                    <EventIndexItemContainer key={i} event={event} />
                ))}
            </div>)
        }
    }      

    return(
        <div>
            {renderEvents()}
        </div>
    )
}

export default Profile
