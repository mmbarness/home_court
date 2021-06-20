import React from 'react'
import { Marker, InfoWindow } from "@react-google-maps/api";

function CurrentUserMarker(props) {

  const [currentUserVector, setCurrentUserVector] = React.useState(false); //info window for user location

  return (
    <div>
      <Marker
        position={props.center}
        icon={{
          url: "/icons/vector.svg",
          scaledSize: new window.google.maps.Size(30, 30),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
        }}
        onMouseOver={() => setCurrentUserVector(true)}
        onMouseOut={() => setCurrentUserVector(false)}
      />

      {currentUserVector ? (
        <InfoWindow
          className='you-are-here-window'
          position={props.center}
          options={{ pixelOffset: new window.google.maps.Size(0, 0) }}
        >
          <p>You are Here</p>
        </InfoWindow>
      ) : null}
    </div>
  )
}

export default CurrentUserMarker