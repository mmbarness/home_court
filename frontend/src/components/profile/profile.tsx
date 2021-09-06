import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchUserEvents } from "../../actions/session_actions";
import EventIndexItem from "../events/eventIndexItem";
import {Event, Attendee} from '../events/eventTypes'
import * as _ from "underscore";

export const Profile = () => {
  const sessionState = useSelector((state: RootStateOrAny) => state.session);
  const currentUser = sessionState.user
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserEvents(currentUser.id));
  }, []);

  const renderEvents = () => {
    let events = currentUser.events;
    if (!_.isEmpty(events)) {
      let eventsArr = events.data.filter((event: Event) => event !== null)
      eventsArr.forEach((event: Event)=> event.visible = true);
      return (
        <div className="user-prof-events">
          {eventsArr.map((event: Event, i: number) => {
            return(<EventIndexItem key={i} event={event} />)
            })}
        </div>
      );
    }
  };

  return (
    <div className="user-prof-events-container">
      <h1>Your upcoming games</h1>
      {renderEvents()}
    </div>
  );
};

export default Profile;
