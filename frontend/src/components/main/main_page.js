import React from 'react';
import EventMap from '../map/event_map'

const eventMarkers = [
  {sport: 'basketball',
    lat: 40.715128,
    lng: -73.9370077
  },
  {sport: 'soccer',
    lat: 40.7130519,
    lng: -73.908111
  },
  {sport: 'volleyball',
    lat: 40.715128,
    lng: -73.9370077
  },
  {sport: 'basketball',
    lat: 40.698152,
    lng: -73.9187878
  },
  {sport: 'soccer',
    lat: 40.7199784,
    lng: -73.9535401
  },
  {sport: 'volleyball',
    lat: 40.7299653,
    lng: -73.9157633
  },
]

class MainPage extends React.Component {

  render() {
    console.log(eventMarkers)
    return (
      <div>
        <EventMap eventMarkers={eventMarkers}/>
        <footer>
          Copyright &copy; 2021 matty & the boyz
        </footer>
      </div>
    );
  }
}

export default MainPage;