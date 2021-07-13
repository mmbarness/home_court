import mapStyles from "./map_styles";

export const orlando = {
  lat: 28.46541,
  lng: -81.2667033,
};

export const houston = {
  lat: 29.7604,
  lng: -95.3698,
};

export const nyc = {
  lat: 40.748817,
  lng: -73.985428,
};

export const libraries = ["places"];

export const mapContainerStyle = {
  minWidth: "500px",
  width: "65vw",
  height: "89vh",
};
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export function selectIcon(sport) {
  switch (sport) {
    case "Soccer":
      return "/icons/soccer.svg";
    case "Basketball":
      return "/icons/basketball.svg";
    case "Volleyball":
      return "/icons/volleyball.svg";
    case "Badminton":
      return "/icons/badminton.svg";
    case "Baseball":
      return "/icons/baseball.svg";
    case "Football":
      return "/icons/football.svg";
    case "Ping Pong":
      return "/icons/pingpong.svg";
    case "Tennis":
      return "/icons/tennis.svg";
    case "Spikeball":
      return "/icons/spikeball.svg";
    default:
      return "/basketball.svg";
  }
}

//Functions takes in an object of events and an object of map bounds and return an array of events happening within the map bounds
export function findEventsInMapBounds(events, mapBounds) {
  if (events === undefined) return []

  const allEventsArr = Object.values(events);

  let eventLat;
  let eventLng;

  const eventsArr = [];  
  const hiddenEvents = []
  allEventsArr.forEach( event => {
      eventLat = parseFloat(event.lat.$numberDecimal);
      eventLng = parseFloat(event.lng.$numberDecimal);

      if (eventLat > mapBounds.lat.min && eventLat < mapBounds.lat.max &&
        eventLng > mapBounds.lng.min && eventLng < mapBounds.lng.max ) {
        event.visible = true;
        eventsArr.push(event);
      } else {
        event.visible = false;
        hiddenEvents.push(event)
      }  
    });
    // debugger;
    return {eventsArr, hiddenEvents}
}