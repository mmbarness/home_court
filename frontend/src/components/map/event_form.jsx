import React from "react";
import { MdClose } from "react-icons/md";
import "../../style/css/event-form.css";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postedBy: this.props.currentUser.id,
      title: "",
      sport: "",
      description: "",
      startDate: "",
      endDate: "",
      lat: this.props.location.lat,
      lng: this.props.location.lng,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearedErrors = false;
    this.update = this.update.bind(this);
    this.handleSportchange = this.handleSportChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = Object.assign({}, this.state);
    this.props.createEvent(newEvent).then(this.props.closeModal());
    this.forceUpdate();
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    const errs = Object.values(this.props.errors);
    return errs.map((error, i) => {
      return (
        <li className="error" key={`err-${i}`}>
          {error}
        </li>
      );
    });
  }

  handleSportChange(e) {
    this.setState({ sport: e.target.value });
  }

  render() {
    // debugger
    return (
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="event-modal-container">
          <form className="event-form-box" onSubmit={this.handleSubmit}>
            <h1>Event Details</h1>
            <div onClick={this.props.closeModal} className="close-x">
              <MdClose size={28} />
            </div>
            <input
              type="text"
              value={this.state.title}
              placeholder="Event Title"
              onChange={this.update("title")}
              className="event-form-input"
            />
            <select
              className="event-form-sport"
              onChange={(e) => this.handleSportChange(e)}
            >
              <option value="" disabled selected>
                Choose your sport..
              </option>
              <option value="Basketball">Basketball</option>
              <option value="Soccer">Soccer</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Spikeball">Spikeball</option>
              <option value="Football">Football</option>
            </select>
            {/* 
            <input
              type="text"
              value={this.state.sport}
              placeholder="Sport"
              onChange={this.update("sport")}
            /> */}

            <textarea
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.update("description")}
              className="event-form-text-area"
            ></textarea>

            <input
              className="event-date"
              type="datetime-local"
              value={this.state.startDate}
              placeholder="Start Time"
              onChange={this.update("startDate")}
            />

            <input
              className="event-date"
              type="datetime-local"
              value={this.state.endDate}
              placeholder="End Time"
              onChange={this.update("endDate")}
            />

            <button
              type="submit"
              value="submit"
              className="event-submit-button"
            >
              Create Event
            </button>
            <ul>{this.renderErrors()}</ul>
          </form>
        </div>
      </div>
    );
  }
}

export default EventForm;
