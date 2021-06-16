import React from 'react';
import EventMap from '../map/event_map'

const eventMarkers = [
  {sport: 'basketball',
    lat: 40.715128,
    lng: -73.9370077,
    title: 'Pickup basketball',
    startDate: new Date('June 16, 2021 12:00:00'),
    endDate: new Date('June 16, 2021 14:00:00'),
  },
  {sport: 'soccer',
    lat: 40.7130519,
    lng: -73.908111,
    title: "Pickup soccer game",
    startDate: new Date('June 16, 2021 14:00:00'),
    endDate: new Date('June 16, 2021 16:00:00'),
  },
  {sport: 'volleyball',
    lat: 40.715128,
    lng: -73.9370077,
    title: "Lets play volleyball",
    startDate: new Date('June 16, 2021 10:00:00'),
    endDate: new Date('June 16, 2021 12:00:00'),
  },
  {sport: 'basketball',
    lat: 40.698152,
    lng: -73.9187878,
    title: 'Pickup basketball',
    startDate: new Date('June 16, 2021 09:00:00'),
    endDate: new Date('June 16, 2021 11:00:00'),
  },
  {sport: 'soccer',
    lat: 40.7199784,
    lng: -73.9535401,
    title: "Pickup soccer game",
    startDate: new Date('June 16, 2021 16:00:00'),
    endDate: new Date('June 16, 2021 18:00:00'),
  },
  {sport: 'volleyball',
    lat: 40.7299653,
    lng: -73.9157633,
    title: "Lets play volleyball",
    startDate: new Date('June 16, 2021 17:30:00'),
    endDate: new Date('June 16, 2021 19:30:00'),
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