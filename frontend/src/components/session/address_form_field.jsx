import React from 'react';
import { Autocomplete, useGoogleMap, GoogleMap,useLoadScript,Marker, InfoWindow } from '@react-google-maps/api'
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {formatRelative} from 'date-fns'
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox'
import "@reach/combobox/styles.css"
import '../../style/css/typeahead-combobox.css'
import { useState } from 'react';
import parser from 'parse-address'

const libraries = ["places"]
const mapContainerStyle = {
    width: '50vw',
    height: '50vh'
}
const options = {
    disableDefaultUI: true, 
    zoomControl: true
}

export const AddressFormField = (props) => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return(
        <div>
            <Search updateAddress = {props.updateAddress}/>
        </div>
    )
};

const Search = (props) => {

    const [address, setAddress] = useState({})
    const [locationData, setLocationData] = useState({})
    const [center, setCenter] = useState({lat: 40.783058, lng: -73.971252})

    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => center.lat, lng: () => center.lng },
            radius: 1000 //p sure its in meters?
        }
    })

    const updateAddress = (locationJSON) => {
        props.updateAddress ? props.updateAddress(locationJSON) : setAddress(locationJSON)
    }

    const handleSelect = async (event) => {
        setValue(event)
        let location = await getGeocode({address: event}).then((resp) =>(resp[0]))
        setLocationData(location)
        let locationJSON = {
            addressString: location.formatted_address,
            addressObj: parser.parseLocation(location.formatted_address),
            coordinates: {lat: location.geometry.location.lat(), long: location.geometry.location.lng()}
        }
        setCenter(locationJSON.coordinates);
        updateAddress(locationJSON);
    }


    return (
        <Combobox className="address-form-field" onSelect={(address) => {handleSelect(address)}}> 
            <ComboboxInput id="address-input" 
                value={value} 
                onChange={(e) => {
                    setValue(e.target.value)
                    updateAddress(e.target.value)
                }}
                disabled={!ready}
                placeholder ="Enter an address"
            />
            <ComboboxPopover className="address-type-ahead">
                {status === "OK" && data.map(({id, description}) => (<ComboboxOption key ={id} value={description}/>) )} 
            </ComboboxPopover>
        </Combobox>
    )
}

// const Map = () => {

//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: "env.REACT_APP_GOOGLE_PLACES_API_KEY",
//         libraries
//     })

//     const [markers, setMarkers] = useState([])
//     const [selected, setSelected] = useState(null);

//     const onMapClick = React.useCallback( (event) => {
//         setMarkers((current) => [
//             ...current, 
//             {
//                 lat: event.latLng.lat(),
//                 lng: event.latLng.lng(),
//                 time: new Date ()
//             }
//         ])  
//     }, [])

//     const mapRef = React.useRef();
    
//     const onMapLoad = React.useCallback( (map) => {
//         mapRef.current = map;
//     }, [])

//     if (loadError) return "Error loading maps"
//     if (!isLoaded) return "Loading Maps"

//     const renderMarker = (marker) => {
//         let lat = parseFloat(marker.lat)
//         let lng = parseFloat(marker.lng)

//         return(
//         <Marker 
//             key={marker.time.toISOString()}
//             position={{lat: lat, lng: lng}}
//             onClick={() => {
//                 setSelected(marker);
//             }}
//         />
//     )}

//     return(<GoogleMap 
//         mapContainerStyle={mapContainerStyle} 
//         zoom={8} 
//         center={center} 
//         options={options}
//         onClick={onMapClick}
//         onLoad = {onMapLoad}> 

//         {markers.map((marker) => (renderMarker(marker)))}

//         {selected ? (
//         <InfoWindow 
//             position={{lat: parseFloat(selected.lat), lng: parseFloat(selected.lng)}} 
//             onCloseClick={() => setSelected(null)}
//         >
//             <p>Game Details - use this functionality to show how many hours away a game is: {formatRelative(selected.time, new Date())}</p>
//         </InfoWindow>) : null}
//     </GoogleMap>)
// }


export default AddressFormField 

