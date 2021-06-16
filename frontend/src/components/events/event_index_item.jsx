import React from "react";

class EventIndexItem extends React.Component {
  render() {
    const { event } = this.props;

    return <div className="event-card">{event.title}</div>;
  }
}

export default EventIndexItem;
