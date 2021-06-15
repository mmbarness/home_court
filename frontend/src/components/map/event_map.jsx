import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';

const libraries = ['places']

const mapContainerStyle = {
    width: "45vw",
    height: "60vh",
}

//Manhattan

function EventMap() {

    const center = {
        lat: 40.783058,
        lng: -73.971252,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    // const options = {
    //     styles: ,

    // }

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading the map';

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    )
}


export default EventMap

