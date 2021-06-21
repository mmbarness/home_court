import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import * as mapUtil from '../../util/map_util'
import EventMapMenu from './event_map_menu'
import CreateEventInfoWindow from './create_event_info_window'
import CurrentUserMarker from './current_user_marker'
import EventsMarkers from './events_markers'

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

        {/* marker on map that appears when there is a panTo event */}
        {eventLocation ? <Marker position={eventLocation} /> : null}

        <CreateEventInfoWindow 
          eventLocation={eventLocation}
          setEventLocation={setEventLocation}
          creatingEvent={creatingEvent}
          setCreatingEvent={setCreatingEvent}
          openModal={props.openModal}
        />

        <EventsMarkers 
          events={props.events.all}
          selected={selected}
          setSelected={setSelected}
          openModal={props.openModal}
        />
      </GoogleMap>
    </div>
  );
}

export default EventMap;

