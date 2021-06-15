import React from 'react';
import EventMap from '../map/event_map'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <EventMap />
        <footer>
          Copyright &copy; 2021 matty & the boyz
        </footer>
      </div>
    );
  }
}

export default MainPage;