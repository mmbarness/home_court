import React, { useEffect, useState } from "react";
import EventMapContainer from '../map/event_map_container'
import EventMap from '../map/event_map'
import EventsIndex from "../events/eventsIindex";
import "../../style/css/main_page.css";
import "../../style/css/events.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../actions/event_actions";
import { fetchUserEvents } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchUserLocation } from "../../actions/map_actions";
import {latLng} from '../events/eventTypes'
let center;

interface latLngMain{
    lat: number 
    lng: number
}

export const MainPage = () => {
    const dispatch = useDispatch();
    const events = useSelector((state: RootStateOrAny) => state.events)
    const currentUser = useSelector((state: RootStateOrAny) => state.session.user)
    const mapBounds = useSelector((state: RootStateOrAny) => state.ui.map.mapBounds)

    const [center, setcenter] = useState <latLngMain> ({
        lat: 40.748817, //this.props.currentUser.lat.$numberDecimal
        lng: -73.985428, //this.props.currentUser.lng.$numberDecimal})
    })

    useEffect(() => {
        fetchUserLocation(currentUser.id);
        navigator.geolocation.getCurrentPosition(
        (position) => {
            setcenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        },
        () => null
        );
    },[])

    return(
        <div className="main-page">
        <section className="main-page-events">
          <EventsIndex
            center={center}
            events={events}
            fetchEvents={fetchEvents}
            currentUser={currentUser}
            fetchUserEvents={fetchUserEvents}
            mapBounds={mapBounds}
          />
        </section>
        <section className="main-page-map">
          <EventMap center={center} />
        </section>
      </div>
    )
}