import React from "react";

class EventCard extends React.Component {
  // componentDidMount() {
  //   this.props.fetchEvent();
  // }

  render() {
    const { event } = this.props;

    return <div className="event-card">{event.id}</div>;
  }
}

export default EventCard;
