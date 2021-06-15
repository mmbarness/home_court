import React from 'react'
import {
    GoogleMap,
    LoadScript,
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
const center = {
    lat: 40.783058,
    lng: -73.971252,
}

class EventMap extends React.Component {
    constructor(props) {
        super(props)
    }

    // const options = {
        //     styles: ,
        
        // }
        
    render() {  
        return (
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={14}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}


export default EventMap

