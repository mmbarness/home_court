import React from "react";
import ResetMapButton from "./reset_map_button";
import AddressFormField from "../session/address_form_field";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./map_styles";
import { MdCancel, MdAddCircle } from "react-icons/md";

const libraries = ["places"];
const mapContainerStyle = {
  minWidth: "500px",
  width: "65vw",
  height: "89vh",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function EventMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: libraries,
  });

  const [selected, setSelected] = React.useState(null); // selected is a current event whose infow window is open
  const [creatingEvent, setCreatingEvent] = React.useState(false); //true: waiting for pin to drop to create event
  const [eventLocation, setEventLocation] = React.useState(null); //evenLocation are the coordinates of a new game

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    setEventLocation({ lat, lng });
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  // debugger;
  const eventsArr = Object.values(props.events.all);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading the map";

  return (
    <div className="event-map-flex-container">
      <div className="event-map-menu">
        {/* <h1>
          Where are the games happening?{" "}
          <span role="img" aria-label="ball">
            🤾
          </span>
        </h1> */}

        {/* Enables the user to set pin on map and open create events form.   */}
        {creatingEvent ? (
          <span
            className="map-button-container"
            onClick={() => {
              setCreatingEvent(false);
              setEventLocation(null);
            }}
          >
            <button className="map-button cancel-game">
              <MdCancel size={25} />
            </button>
            <div className="map-button-text">Cancel</div>
          </span>
        ) : (
          <span
            className="map-button-container"
            onClick={() => {
              setEventLocation(null);
              setCreatingEvent(true);
            }}
          >
            <button className="map-button create-game">
              <MdAddCircle size={25} />
            </button>
            <div className="map-button-text">Host an event</div>
          </span>
        )}

        {/* _______________________________________________________________________*/}

        <AddressFormField panTo={panTo} center={props.center} />

        {/* Auto geolocate buttons   */}
        <ResetMapButton panTo={panTo} center={props.center} text="Back Home" />
        <ResetMapButton panTo={panTo} center={orlando} text="Orlando" />
      </div>
      <div className="terrible-css-practice" />
      {/* _______________________________________________________________________*/}

      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapContainerStyle}
        center={props.center}
        zoom={15}
        options={options}
        onClick={(e) => {
          if (selected) setSelected(null);
          if (creatingEvent) {
            setEventLocation({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            });
          }
        }}
      >
        {eventLocation ? <Marker position={eventLocation} /> : null}

        {/* InfoWindow and Map Marker for New events being created   */}
        {eventLocation && creatingEvent ? (
          <div>
            <InfoWindow
              position={eventLocation}
              options={{ pixelOffset: new window.google.maps.Size(0, -46) }}
              onCloseClick={() => null}
            >
              <button
                onClick={() => {
                  props.openModal({
                    modal: "event-form",
                    data: eventLocation,
                  });
                  setCreatingEvent(false);
                  setEventLocation(null);
                }}
              >
                Create Game Here
              </button>
            </InfoWindow>
          </div>
        ) : null}
        {/* _______________________________________________________________________*/}

        {/* InfoWindows and Map Markers for all existing events*/}
        {eventsArr.map((event) => (
          <Marker
            key={event._id}
            position={{
              lat: parseFloat(event.lat.$numberDecimal),
              lng: parseFloat(event.lng.$numberDecimal),
            }}
            icon={{
              url: selectIcon(event.sport),
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(event);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{
              lat: parseFloat(selected.lat.$numberDecimal),
              lng: parseFloat(selected.lng.$numberDecimal),
            }}
            options={{ pixelOffset: new window.google.maps.Size(0, -12) }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h1>{selected.title}</h1>
              <p>Start: {new Date(selected.startDate).toLocaleTimeString()}</p>
              <p>End: {new Date(selected.endDate).toLocaleTimeString()}</p>
              {/* <p>Start: {selected.startDate.toLocaleTimeString()}</p>
                            <p>End: {selected.endDate.toLocaleTimeString()}</p>                       */}
            </div>
            {/* <button
              onClick={() => {
                this.props.openModal({
                  modal: "event-show",
                  data: this.props.event,
                });
              }}
            ></button> */}
          </InfoWindow>
        ) : null}
        {/* _______________________________________________________________________*/}
      </GoogleMap>
    </div>
  );
}

export default EventMap;

//Brooklyn
// const brooklyn = {
//     lat: 40.701000,
//     lng: -73.941011
// }

// Orlando
const orlando = {
  lat: 28.5418255,
  lng: -81.3810412,
};

function selectIcon(sport) {
  switch (sport) {
    // case 'spikeball':
    //     return '/spikeball.svg'
    case "Soccer":
      return "/soccer.svg";
    case "Basketball":
      return "/basketball.svg";
    case "Volleyball":
      return "/volleyball.svg";
    default:
      return "/basketball.svg";
  }
}
