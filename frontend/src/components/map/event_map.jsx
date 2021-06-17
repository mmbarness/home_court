import React from 'react'
import ResetMapButton from './reset_map_button'
import EventFormModal from './event_form_modal'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './map_styles';

const libraries = ['places']
const mapContainerStyle = {
    width: "45vw",
    height: "90vh",
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

    const [selected, setSelected] = React.useState(null) // selected is a current event whose infow window is open     
    const [creatingEvent, setCreatingEvent] = React.useState(false) //true: waiting for pin to drop to create event
    const [eventLocation, setEventLocation] = React.useState(null) //evenLocation are the coordinates of a new game
    const [eventFormModal, setEventFormModal] = React.useState(false) //true: will open even event form modal

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(15);
    }, []);

        // const eventsArr = Object.values(props.events.all);
   
    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading the map';
    
    return (
        <div>
            <h1>Where are the games happening? <span role='img' aria-label='ball'>🤾</span></h1>

            {creatingEvent ?
                <button id="create game" onClick={() => {
                    setCreatingEvent(false)
                    setEventLocation(null)
                }}>
                    Cancel</button>
                : 
                <button id="create game" onClick={() => setCreatingEvent(true)}>Create Game</button> }

            <ResetMapButton panTo={panTo} center={props.center} />

            <GoogleMap
                onLoad={onMapLoad}
                mapContainerStyle={mapContainerStyle}
                center={props.center}
                zoom={15}
                options={options}
                onClick={(e) => {
                    if (selected) setSelected(null)                    
                    if (creatingEvent) {
                        setEventLocation({
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng(),
                        })
                        console.log(eventLocation)
                    }
                }}
            >

            {eventLocation ? (
                <div>
                    <Marker position={eventLocation} />

                    <InfoWindow 
                        position={eventLocation}
                            options={ {pixelOffset: new window.google.maps.Size(0,-46)}}
                        onCloseClick={() => null}
                    >
                        <button>Create Game Here</button>
                    </InfoWindow> 
                </div> ) : null
            }

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

            {eventFormModal ? 
                <EventFormModal
                    className="modal-background"
                    eventLocation={eventLocation}
                    onClick={() => setEventFormModal(false)}
                    eventFormModal={eventFormModal}
                    setEventFormModal={setEventFormModal}
                /> : null }   

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


