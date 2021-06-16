import React from "react";

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attending: false,
    };
    this.openEventModal = this.openEventModal.bind(this);
  }

  openEventModal() {
    this.props.openModal("event-show");
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event-index-item">
        <h1>
          <button className="event-index-item-title" onClick={this.openEventModal}>
            {event.title}
          </button>
        </h1>
        <h1>{event.sport}</h1>
        <div>
          <h3>Number of attendees:</h3>
          <p>{event.attendees.length}</p>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{event.description}</p>
        </div>
      </div>
    );
  }
}

export default EventIndexItem;
