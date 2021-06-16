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
    width: "80vw",
    height: "80vh",
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

function EventMap(props) {

    const center = selectCenter()

    const [selected, setSelected] = React.useState(null)
    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    })

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading the map';
    
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
                <Marker key={i}
                    position={{ lat: event.lat, lng: event.lng }}                        
                    icon={{
                        url: selectIcon(event.sport),
                        scaledSize: new window.google.maps.Size(30,30),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(15,15)
                    }}
                    onClick={() => {
                        setSelected(event)
                    }}
                />
                ))}
                
                {selected ? (
                <InfoWindow 
                    position={{lat: selected.lat, lng: selected.lng}}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h2>{selected.title}</h2>
                        
                    </div>
                </InfoWindow>): null }
            </GoogleMap>
        </div>
    )
}

export default EventMap

//Brooklyn
const brooklyn = {
    lat: 40.701000,
    lng: -73.941011
}

function selectCenter(geo = brooklyn) {
    return geo
}

function selectIcon(sport) {
    switch (sport) {
        // case 'spikeball':
        //     return '/spikeball.svg'
        // case 'soccer':
        //     return '/soccer.svg'
        // case 'basketball':
        //     return '/basketball.svg'
        default:
            return '/soccer.svg'
    }
}


