export const displaySportWithEmoji = (sport) => {
  switch (sport) {
    case "Basketball":
      return "Basketball 🏀";
    case "Volleyball":
      return "Volleyball 🏐";
    case "Football":
      return "Football 🏈";
    case "Soccer":
      return "Soccer ⚽️";
    case "Spikeball":
      return "Spikeball 🤾‍♂️";
    case "Tennis":
      return "Tennis 🎾";
    case "Badminton":
      return "Badminton 🏸";
    case "Baseball":
      return "Baseball ⚾️";
    case "Ping Pong":
      return "Ping Pong 🏓";
    default:
      return "oops";
  }
};
