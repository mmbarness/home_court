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

function AddressFormField(props) {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return(
        <div>
            <Search 
                updateAddress={props.updateAddress ? props.updateAddress : null}
                panTo={props.panTo ? props.panTo : null}
            />
        </div>
    )
};

const Search = (props) => {

    const start = props.center || {lat: 39.828239, lng: -98.579373};
    const radius = props.center ? 12000 : 3218688;
    const [address, setAddress] = useState({});
    const [locationData, setLocationData] = useState({});
    const [center, setCenter] = useState(start);
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions,
        } = usePlacesAutocomplete({requestOptions: {
            location: {lat: () => center.lat, lng: () => center.lng },
            radius: radius //in meters
        }
    });

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

        const coord = {lat: locationJSON.coordinates.lat, lng: locationJSON.coordinates.long}
        setCenter(coord);
        updateAddress(locationJSON);

        if (props.panTo) {
            props.panTo(coord)
        }
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
                {status === "OK" && data.map(({id, description}) => (
                    <ComboboxOption key ={id} value={description}/>
                ))} 
            </ComboboxPopover>
        </Combobox>
    )
}

export default AddressFormField