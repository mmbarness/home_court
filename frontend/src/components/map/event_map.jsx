import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './map_styles';
// import ReactDOM from 'react-dom';
// import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';

const libraries = ['places']
const mapContainerStyle = {
    width: "45vw",
    height: "60vh",
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

function EventMap(props) {

    //Brooklyn
    const center = {
        lat: 40.701000,
        lng: -73.941011
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading the map';
    console.log(props.eventMarkers)
    return (
        <div>
            <h1>Home Court <span role='img' aria-label='ball'>🤾</span></h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                options={options}
                onClick={(event) => {
                    console.log(event)
                }}
            >
                {props.eventMarkers.map((event, i) => (
                        <Marker key={i} position={{ lat: event.lat, lng: event.lng }} />
                ))}
                
                <></>
            </GoogleMap>
        </div>
    )
}


export default EventMap


{/* <GoogleMap>
    <Marker
    key={Marker.time.toISOString()}
    position={{lat: Marker.lat, lng: Marker.lng}}
    icon={{
        url: './icon.svg',
        scaledSize: new window.google.maps.Size(30,30),
        origin: new window.google.maps.point(0,0),

    }}
</GoogleMap> */}

