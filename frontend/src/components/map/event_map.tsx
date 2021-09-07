import React, { useCallback, useRef, useState } from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import * as mapUtil from '../../util/map_util'
import EventMapMenu from './event_map_menu'
import CreateEventInfoWindow from './create_event_info_window'
import CurrentUserMarker from './current_user_marker'
import EventsMarkers from './events_markers'
import {Event} from '../events/eventTypes'
import { User } from "../globalCompTypes";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { receiveMapBounds } from "../../actions/map_actions";

interface latLngEventMap{
    lat: number 
    lng: number
}
interface allEvents{
  all: Event[]
}
interface EventMapProps{
  events?: allEvents
  center: latLngEventMap
  currentUser?: User
  openModal?: any
  closeModal?: any
  receiveMapBounds?: any
}
interface MapBoundLatLng{
  min: number
  max: number
}

interface MapBoundsType{
  lat:MapBoundLatLng
  lng:MapBoundLatLng
}


const EventMap = (props: EventMapProps) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ['places'],
  });

  const dispatch = useDispatch()

  const [selected, setSelected] = useState(null); // selected is a current event whose infow window is open
  const [creatingEvent, setCreatingEvent] = useState(false); //true: waiting for pin to drop to create event
  const [eventLocation, setEventLocation] = useState(null); //eventLocation are the coordinates of a new game

  const events: allEvents = useSelector((state: RootStateOrAny) => state.events);
  const currentUser: User = useSelector((state:RootStateOrAny) => state.session.user);
  
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  const onBoundsChanged = () => {
    const current:any = mapRef.current!
    const ne = (current) ? current.getBounds().getNorthEast() : null
    const sw = (current) ? current.getBounds().getSouthWest() : null
    const mapBounds = {
      lat: {
        min: sw.lat(), max: ne.lat()
      },
      lng: {
        min: sw.lng(), max: ne.lng()
      }
    }
    dispatch(receiveMapBounds(mapBounds))
  } 

  if (loadError) return <div>"Error loading maps"</div>;
  if (!isLoaded) return <div>"Loading the map"</div>

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
        onBoundsChanged={onBoundsChanged}
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
          openModal={() => openModal()}
        />

        <EventsMarkers 
          events={events.all}
          center={props.center}
          selected={selected}
          setSelected={setSelected}
          openModal={() => openModal()}
        />
      </GoogleMap>
    </div>
  );
}

export default EventMap;

