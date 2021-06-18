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
import { GrLocation } from "react-icons/gr";

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
  const [currentUserVector, setCurrentUserVector] = React.useState(false); //info window for user location

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    setEventLocation({ lat, lng });
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const eventsArr = Object.values(props.events.all);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading the map";

  return (
    <div className="event-map-flex-container">
      <div className="event-map-menu">
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
        <ResetMapButton panTo={panTo} center={houston} text="Houston" />
        <ResetMapButton panTo={panTo} center={nyc} text="New York" />
      </div>
      <div className="terrible-css-practice" />

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
        <Marker
          position={props.center}
          icon={{
            url: "/icons/vector.svg",
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
          onMouseEnter={() => setCurrentUserVector(true)}
          onMouseLeave={() => setCurrentUserVector(false)}
        />

        {currentUserVector ? (
          <InfoWindow
            position={props.center}
            options={{ pixelOffset: new window.google.maps.Size(0, -46) }}
          >
            <p>You are Here</p>
          </InfoWindow>
        ) : null}

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
                className="map-button-location"
                onClick={() => {
                  props.openModal({
                    modal: "event-form",
                    data: eventLocation,
                  });
                  setCreatingEvent(false);
                  setEventLocation(null);
                }}
              >
                <GrLocation size={18} />
                {""}
                {""}
                Set Location
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
              <h1 className='info-window-title'
                onClick={() => props.openModal({
                  modal: 'event-show',
                  data: selected 
                })}
              >{selected.title}</h1>
              <p>{new Date().getDay() === new Date(selected.startDate).getDay() ? 
                ('Today')
                  : 
                (`${daysOfWeek[new Date(selected.startDate).getDay()]} ${new Date(selected.startDate).toLocaleDateString()}`)}</p>
              <p>Start: {new Date(selected.startDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
              <p>End: {new Date(selected.endDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            </div>
          </InfoWindow>
        ) : null}
        {/* _______________________________________________________________________*/}
      </GoogleMap>
    </div>
  );
}

export default EventMap;

const orlando = {
  lat: 28.46541,
  lng: -81.2667033,
};

const houston = {
  lat: 29.7604,
  lng: -95.3698,
};

const nyc = {
  lat: 40.748817,
  lng: -73.985428,
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function selectIcon(sport) {
  switch (sport) {
    case "Soccer":
      return "/icons/soccer.svg";
    case "Basketball":
      return "/icons/basketball.svg";
    case "Volleyball":
      return "/icons/volleyball.svg";
    case "Badminton":
      return "/icons/badminton.svg";
    case "Baseball":
      return "/icons/baseball.svg";
    case "Football":
      return "/icons/football.svg";
    case "Ping Pong":
      return "/icons/pingpong.svg";
    case "Tennis":
      return "/icons/tennis.svg";
    case "Spikeball":
      return "/icons/spikeball.svg";
    default:
      return "/basketball.svg";
  }
}
