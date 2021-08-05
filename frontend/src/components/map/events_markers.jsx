import React from 'react'
import { Marker, InfoWindow } from "@react-google-maps/api";
import { formatDateTime } from "../../util/date_util_short";
import * as mapUtil from '../../util/map_util'

function EventsMarkers(props) {

    const eventsArr = Object.values(props.events);
    const selectedEvent = props.selected

    return(
        <div>
            {eventsArr.map((event) => (
                <Marker className='event-marker'
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
                        props.setSelected(event);
                    }}
                />
            ))}

            {selectedEvent ? (
            <InfoWindow
                position={{
                lat: parseFloat(selectedEvent.lat.$numberDecimal),
                lng: parseFloat(selectedEvent.lng.$numberDecimal),
                }}
                options={{ pixelOffset: new window.google.maps.Size(0, -12) }}
                onCloseClick={() => {
                props.setSelected(null);
                }}
            >
                <div>
                <h1 className='info-window-title'
                    onClick={() => props.openModal({
                    modal: 'event-show',
                    data: {
                        startLocation: props.center,
                        event: selectedEvent
                    } 
                    })}
                >{selectedEvent.title}</h1>
                <p>{new Date().toLocaleDateString() === new Date(selectedEvent.startDate).toLocaleDateString() ? 
                    (`Today at ${formatDateTime(selectedEvent.startDate).slice(15)}`)
                    : 
                    (`${formatDateTime(selectedEvent.startDate)}`)}</p>
                <p>End: {new Date(selectedEvent.endDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
            </InfoWindow>
            ) : null}
        </div>
    )
}

export default EventsMarkers