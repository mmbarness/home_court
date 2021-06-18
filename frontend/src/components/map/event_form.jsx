import React from "react";
import { MdClose } from "react-icons/md";
import "../../style/css/event-form.css";
import * as _ from 'underscore'
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
    this.eventValidation = this.eventValidation.bind(this)
    this.errorChecker = this.errorChecker.bind(this);
  }

  eventValidation(newEvent) {
    let errors = {description_error: "", title_error: ""}
    if (newEvent.description.length < 5 || newEvent.description.length > 50){
      errors.description_error = 'description needs to a bit more descriptive!'
    } if (newEvent.title.length < 1) {
      errors.title_error = 'title can\'t be empty' 
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = Object.assign({}, this.state);
    // this.eventValidation(newEvent)
    this.props.createEvent(newEvent).then(
      () => {
        if (!this.errorChecker){
          this.props.closeModal()
        } else {
          this.renderErrors()
        }
      });
    this.forceUpdate();
  }

  errorChecker() {
    let errors = this.props.errors.events
    (_.isEmpty(errors)) ? false : true 
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    const err = this.props.errors.request.response
    let errDiv = document.createElement("div")
    let errText = document.createTextNode(err);
    errDiv.appendChild(errText);
    let eventFormBox = document.getElementById('event-form-box')
    let eventFormHeader = document.getElementById('event-form-title-input')
    eventFormBox.insertBefore(errDiv, eventFormHeader)
  }

  handleSportChange(e) {
    this.setState({ sport: e.target.value });
  }

  render() {
    return (
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="event-modal-container" id="event-form-container">
          <form className="event-form-box" id="event-form-box" onSubmit={this.handleSubmit}>
            <h1 id="create-event-header">Event Details</h1>
            <div onClick={this.props.closeModal} className="close-x">
              <MdClose size={28} />
            </div>
            <input id="event-form-title-input"
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
          </form>
        </div>
      </div>
    );
  }
}

export default EventForm;
