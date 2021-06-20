import React from "react";
import EventMapMenu from './event_map_menu'
import * as mapUtil from '../../util/map_util'
import CurrentUserMarker from './current_user_marker'
import { GrLocation } from "react-icons/gr";
import { formatDateTime } from "../../util/date_util_short";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function EventMap(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: mapUtil.libraries,
  });

  const [selected, setSelected] = React.useState(null); // selected is a current event whose infow window is open
  const [creatingEvent, setCreatingEvent] = React.useState(false); //true: waiting for pin to drop to create event
  const [eventLocation, setEventLocation] = React.useState(null); //evenLocation are the coordinates of a new game
  
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const eventsArr = Object.values(props.events.all);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading the map";

  return (
    <div className="event-map-flex-container">

      <EventMapMenu 
        creatingEvent={creatingEvent}
        setCreatingEvent={setCreatingEvent}
        eventLocation={eventLocation}
        setEventLocation={setEventLocation}
        mapRef={mapRef}
        center={props.center} />
        
      <div className="terrible-css-practice" />

      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={mapUtil.mapContainerStyle}
        center={props.center}
        zoom={15}
        options={mapUtil.options}
        onClick={(e) => {
          if (selected) setSelected(null);
          if (creatingEvent) {
            setEventLocation({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            });
          } else {
            setEventLocation(null)
          }
        }}
      >
        <CurrentUserMarker center={props.center}/>
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
            className='event-marker'
            key={event._id}
            position={{
              lat: parseFloat(event.lat.$numberDecimal),
              lng: parseFloat(event.lng.$numberDecimal),
            }}
            icon={{
              url: mapUtil.selectIcon(event.sport),
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
              <p>{new Date().toLocaleDateString() === new Date(selected.startDate).toLocaleDateString() ? 
                (`Today at ${formatDateTime(selected.startDate).slice(15)}`)
                  : 
                (`${formatDateTime(selected.startDate)}`)}</p>
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

