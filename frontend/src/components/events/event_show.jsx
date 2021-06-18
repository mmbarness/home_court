import React from "react";
import { MdClose } from "react-icons/md";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../map/map_styles";
import { formatDateTime } from "../../util/date_util_short";
import { FiMapPin, FiUsers, FiClock, FiMeh } from "react-icons/fi";
import { BsPeopleFill, BsCalendarFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { displaySportWithEmoji } from "../../util/sport_emoji";
import DeleteEvent from "./delete_event";
import JoinOrNot from "./joinOrNot";

const libraries = ["places"];
const mapContainerStyle = {
  width: "480px",
  height: "250px",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
};

function EventShow(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const { event } = props;
  const center = {
    lat: parseFloat(event.lat.$numberDecimal),
    lng: parseFloat(event.lng.$numberDecimal),
  };
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const postedByName = event.attendees[0].username;

  const googleMapsLink = `http://www.google.com/maps/place/${center.lat},${center.lng}`;

  return (
    <div className="event-modal-container">
      <div>
        <div onClick={props.closeModal} className="close-x">
          <MdClose size={28} />
        </div>
      </div>
      <div className="event-show-modal">
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={17}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
        <section className="event-show-info">
          <div className="event-show-header">
            <h1 className="login-form-header">{event.title}</h1>
            <h1 className="event-show-sport-header">
              {displaySportWithEmoji(event.sport)}
            </h1>
          </div>
          <section className="event-show-details">
            <span className="event-show-span">
              <div>
                <BsPeopleFill />
              </div>
              Attendees: {event.attendees.length}
            </span>

            <span className="event-show-span">
              <div>
                <BsCalendarFill />{" "}
              </div>
              Start Time: {formatDateTime(event.startDate)}
            </span>
            <span className="event-show-span">
              <div>
                <FiClock />
              </div>{" "}
              End Time: {formatDateTime(event.endDate)}
            </span>
            <span className="event-show-span">
              <div>
                <FiMeh />
              </div>
              Hosted by {postedByName}
            </span>
            <span className="event-show-span">
              <div>
                <IoLocationSharp />
              </div>
              <a href={googleMapsLink} target="_blank">
                Get Directions
              </a>
            </span>
            <span id="event-show-description">
              <h3>Description:</h3>
              <p>{event.description}</p>
            </span>
          </section>
          <section className="event-show-footer">
            <JoinOrNot event={event} />
            <DeleteEvent event={event} />
          </section>
        </section>
      </div>
    </div>
  );
}

export default EventShow;
