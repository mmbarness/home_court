import React from 'react'
import { InfoWindow } from "@react-google-maps/api";
import { GrLocation } from "react-icons/gr";

function CreateEventInfoWindow(props) {
    //props.eventLocation
    //creatingEvent
    //setCreatingEvent
    return(
        props.eventLocation && props.creatingEvent ? (
            <div>
                <InfoWindow
                    position={props.eventLocation}
                    options={{ pixelOffset: new window.google.maps.Size(0, -46) }}
                >
                    <button
                        className="map-button-location"
                        onClick={() => {
                            props.openModal({
                                modal: "event-form",
                                data: props.eventLocation,
                            });
                            props.setCreatingEvent(false);
                            props.setEventLocation(null);
                        }}
                    >
                        <GrLocation size={18} />
                        {""}
                        {""}
                        Set Location
                    </button>
                </InfoWindow>
            </div>
        ) : null
    )
}

export default CreateEventInfoWindow