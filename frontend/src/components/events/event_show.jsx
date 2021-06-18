import React from "react";
import { MdClose } from "react-icons/md";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../map/map_styles";
import { formatDateTime } from "../../util/date_util_short";
import { FiMapPin, FiUsers, FiClock, FiMeh } from "react-icons/fi";
import { BsPeopleFill, BsCalendarFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import DeleteEvent from "./delete_event";

const libraries = ["places"];
const mapContainerStyle = {
  width: "550px",
  height: "250px",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  // zoomControl: true,
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
          className="event-show-map"
        >
          <Marker position={center} />
        </GoogleMap>
        <section className="event-show-info">
          <h1 className="login-form-header">{event.title}</h1>
          <h1>{event.sport}</h1>
          <p>
            <BsPeopleFill />
            Attendees: {event.attendees.length}
          </p>

          <p>
            <BsCalendarFill /> Start Time:
            {formatDateTime(event.startDate)}
          </p>
          <p>
            <FiClock /> End Time:
            {formatDateTime(event.endDate)}
          </p>
          <p>
            <FiMeh />
            Created by {postedByName}
          </p>
          <p>
            <IoLocationSharp />
            <a href={googleMapsLink} target="_blank">
              Get Directions
            </a>
          </p>
          <div>
            <h3>Description:</h3>
            <p>{event.description}</p>
          </div>
          <DeleteEvent event={event}/>
        </section>
      </div>
    </div>
  );
}

export default EventShow;
