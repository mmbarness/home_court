import React from "react";
import EventIndexItemContainer from "./event_index_item_container";

class EventsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const allEventsArr = Object.values(this.props.events.all);

    // const userEventsArr = [];

    // for (let i = 0; i < allEventsArr.length; i++) {
    //   allEventsArr[i].forEach((event) => {
    //     if (event.attendees.includes(this.props.currentUser))
    //       userEventsArr.push(allEventsArr[i]);
    //   });
    // }
    // const myEvents = eventsArr.filter((event) => {
    //   // console.log(event);
    //   // console.log(this.props.currentUser);
    //   return event.attendees.includes(
    //     (event) => event.username === this.props.currentUser.username
    //   );
    //   // return Object.values(event.attendees).includes(this.props.currentUser);
    // });

    return (
      <div>
        <div className="user-events">
          <h1>My Games</h1>
          <div>
            {/* my events
            {userEventsArr.map((event, i) => (
              <EventIndexItem key={i} event={event} />
            ))} */}
          </div>
        </div>
        <div className="all">
          <h1>Find a Game Near You</h1>
          <div>
            {allEventsArr.map((event, i) => (
              <EventIndexItemContainer key={i} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EventsIndex;
