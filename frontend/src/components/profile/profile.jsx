import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEvents } from "../../actions/session_actions";
import EventIndexItemContainer from "../events/event_index_item_container";
import * as _ from "underscore";

export const Profile = () => {
  const currentUser = useSelector((state) => state.session.user);
  const sessionState = useSelector((state) => state.session);
  const allEvents = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserEvents(currentUser.id));
  }, []);

  const renderEvents = () => {
    let events = currentUser.events;
    // debugger;
    if (!_.isEmpty(events)) {
      return (
        <div className="user-prof-events">
          {events.data.map((event, i) => (
            <EventIndexItemContainer key={i} event={event} />
          ))}
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
