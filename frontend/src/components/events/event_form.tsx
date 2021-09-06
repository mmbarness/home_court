import React, { ChangeEvent, useState } from "react";
import { MdClose } from "react-icons/md";
import "../../style/css/event-form.css";
import * as _ from "underscore";
import {User} from '../globalCompTypes'
import {Event} from './eventTypes'
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { createEvent } from "../../actions/event_actions";
import { closeModal } from "../../actions/modal_actions";

interface EventFormProps {
  appLocation: string, 
}

interface EventFormInitialState {
  dateCreated?: string
  description?: string
  endDate?: string
  lat?: google.maps.LatLng
  lng?: google.maps.LatLng
  postedBy?: string
  sport?: string
  startDate?: string
  title?: string
  visible?: boolean
  __v?: number
  _id?: number
}

const EventForm = (props: EventFormProps) => {

  let errors = useSelector((state: RootStateOrAny) => state.errors.events)
  let currentUser = useSelector((state: RootStateOrAny) => state.session.user)
  let location = useSelector((state: RootStateOrAny) => state.ui.modal.data)

  const [state, setState] = useState<EventFormInitialState>({
    postedBy: currentUser.id,
    startDate: (new Date()).toISOString().slice(0,16),
    endDate: "",
    sport: "",
    description: "",
    title: "",
    lat: location.lat,
    lng: location.lng,
    // appLocation : props.appLocation
  })

  const dispatch = useDispatch()
  const dispatchEvent = (event: EventFormInitialState) => (dispatch(createEvent(event)))
  const dispatchModal = () => dispatch(closeModal())

  const eventValidation = (newEvent: Event) => {
    let errors = { description_error: "", title_error: "" };
    if (newEvent.description.length < 5 || newEvent.description.length > 50) {
      errors.description_error = "description needs to a bit more descriptive!";
    }
    if (newEvent.title.length < 1) {
      errors.title_error = "title can't be empty";
    }
  }

  const handleSubmit = async (e: MouseEvent) =>{
    e.preventDefault();
    const newEvent:EventFormInitialState = {    
      "postedBy": currentUser.id!,
      "startDate": state.startDate!,
      "endDate": state.endDate!,
      "sport": state.sport!,
      "description": state.description!,
      "title": state.title!,
      "lat": state.lat!,
      "lng": state.lng!
    };
    let whatever = await dispatchEvent(newEvent)
    (errorChecker()) ? closeModal() : null 
  }

  const errorChecker = () => {
    return(_.isEmpty(errors))
  }

  const update = (property: string, id: string) => {
    const inputVal = (document.getElementById(id) as HTMLInputElement).value
    if (inputVal){
      setState({[property]: inputVal} as any)
    } else {
      setState({[property]: ""} as any)
    }
  }

  const renderErrors = () => {
    const err = errors
    let errDiv1 = document.createElement("div");
    let errText = document.createTextNode(`${err.response.data.title}!`);
    errDiv1.appendChild(errText);
    let eventFormBox = document.getElementById("event-form-box");
    let eventFormHeader = document.getElementById("event-form-title-input");
    if (eventFormBox){
      eventFormBox.insertBefore(
        errDiv1, 
        eventFormHeader
      )
    }
  }

  const returnErrors = () => {
    return(<div id="create-event-form-error">{errors.response.data.title}!</div>)
  }

  const handleSportChange = (e: ChangeEvent, elementId:string) => {
    const sportOption = (document.getElementById(elementId) as HTMLSelectElement).value
    if (sportOption){
      setState({ "sport": sportOption });
    }
  }

    return (
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="event-modal-container" id="event-form-container">
          <form
            className="event-form-box"
            id="event-form-box"
            onSubmit={() => handleSubmit}
          >
            {errorChecker() ? null : returnErrors()}
            <h1 id="create-event-header">Event Details</h1>
            <div onClick={() => closeModal()} className="close-x">
              <MdClose size={28} />
            </div>
            <input
              id="event-form-title-input"
              type="text"
              value={state.title}
              placeholder="Event Title"
              onChange={() => update("title", 'event-form-title-input')}
              className="event-form-input"
            />
            <select
              className="event-form-sport"
              id="event-form-sport-option"
              onChange={(e) => handleSportChange(e, "event-form-sport-option")}
            >
              <option value="" disabled selected>
                Choose your sport..
              </option>
              <option value="Basketball">Basketball</option>
              <option value="Soccer">Soccer</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Spikeball">Spikeball</option>
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
              <option value="Baseball">Baseball</option>
              <option value="Ping Pong">Ping Pong</option>
              <option value="Tennis">Tennis</option>
            </select>

            <textarea
              id="description-textarea"
              value={state.description}
              placeholder="Event Description"
              onChange={() => update("description", "description-textarea")}
              className="event-form-text-area"
            ></textarea>

            <input
              className="event-date"
              id="start-date-input"
              type="datetime-local"
              value={state.startDate}
              placeholder="Start Time"
              onChange={() => update("startDate","start-date-input")}
            />

            <input
              className="event-date"
              id="end-date-input"
              type="datetime-local"
              value={state.endDate}
              placeholder="End Time"
              onChange={() => update("endDate","end-date-input")}
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

export default EventForm;
