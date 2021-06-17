import React from "react";
import { MdClose } from "react-icons/md";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import mapStyles from "../map/map_styles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "200px",
  height: "400px",
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

  return (
    <div className="event-modal-container">
      <div className="login-form-box">
        <div>
          <div onClick={props.closeModal} className="close-x">
            <MdClose size={28} />
          </div>
        </div>

        <h1 className="login-form-header">{event.title}</h1>
        <h1>{event.sport}</h1>
        <p>Number of attendees: {event.attendees.length}</p>
        <div>
          <h3>Description:</h3>
          <p>{event.description}</p>
        </div>
        {/* <button onClick={this.joinEvent}>Join this event</button> */}
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={18}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default EventShow;
