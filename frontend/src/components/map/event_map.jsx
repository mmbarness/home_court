import React from 'react'
import ResetMapButton from './reset_map_button'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './map_styles';

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

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries: libraries
    })

    const [selected, setSelected] = React.useState(null)    

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);

    // const eventsArr = Object.values(props.events);
   
    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading the map';
    console.log(props)
    console.log(props.center)
    console.log(props.events)
    return (
        <div>
            <h1>Where are the games happening? <span role='img' aria-label='ball'>🤾</span></h1>
            <ResetMapButton panTo={panTo} center={props.center} />
            <GoogleMap
                onLoad={onMapLoad}
                mapContainerStyle={mapContainerStyle}
                center={props.center}
                zoom={14}
                options={options}
                onClick={() => {
                    if (selected) setSelected(null)
                }}
            >
            {props.events.map((event, i) => (
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
                        options={ {pixelOffset: new window.google.maps.Size(0,-12)}}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h1>{selected.title}</h1>
                            <p>Start: {selected.startDate.toLocaleTimeString()}</p>
                            <p>End: {selected.endDate.toLocaleTimeString()}</p>
                        

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

function selectIcon(sport) {
    switch (sport) {
        // case 'spikeball':
        //     return '/spikeball.svg'
        case 'soccer':
            return '/soccer.svg'
        case 'basketball':
            return '/basketball.svg'
        case 'volleyball':
            return '/volleyball.svg'
        default:
            return '/basketball.svg'
    }
}

// function Locate({panTo}) {
//     return <button><img src='volleyball.svg' alt='center' /></button>
// }


