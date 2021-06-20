import React from "react";
import ResetMapButton from "./reset_map_button";
import AddressFormField from "../session/address_form_field";
import { MdCancel, MdAddCircle } from "react-icons/md";
import * as mapUtil from '../../util/map_util'

function EventMapMenu(props) {

    const panTo = React.useCallback(({ lat, lng }) => {
        props.setEventLocation({ lat, lng });
        props.mapRef.current.panTo({ lat, lng });
        props.mapRef.current.setZoom(15);
    }, []);

    return (
        <div className="event-map-menu">
            {props.creatingEvent ? (
            <span
                className="map-button-container"
                onClick={() => {
                props.setCreatingEvent(false);
                props.setEventLocation(null);
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
                props.setEventLocation(null);
                props.setCreatingEvent(true);
                }}
            >
                <button className="map-button create-game">
                <MdAddCircle size={25} />
                </button>
                <div className="map-button-text">Host an event</div>
            </span>
            )}

            <AddressFormField panTo={panTo} center={props.center} />

            <ResetMapButton panTo={panTo} center={props.center} text="Back Home" />
            <ResetMapButton panTo={panTo} center={mapUtil.orlando} text="Orlando" />
            <ResetMapButton panTo={panTo} center={mapUtil.houston} text="Houston" />
            <ResetMapButton panTo={panTo} center={mapUtil.nyc} text="New York" />
        </div>
    )
}

export default EventMapMenu